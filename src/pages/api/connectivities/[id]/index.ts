import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { connectivityValidationSchema } from 'validationSchema/connectivities';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.connectivity
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getConnectivityById();
    case 'PUT':
      return updateConnectivityById();
    case 'DELETE':
      return deleteConnectivityById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getConnectivityById() {
    const data = await prisma.connectivity.findFirst(convertQueryToPrismaUtil(req.query, 'connectivity'));
    return res.status(200).json(data);
  }

  async function updateConnectivityById() {
    await connectivityValidationSchema.validate(req.body);
    const data = await prisma.connectivity.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteConnectivityById() {
    const data = await prisma.connectivity.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
