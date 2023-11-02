import { handleRequest } from './helpers/handle-request';

export async function DELETE(
  req: Request,
  { params }: { params: { memberId: string } }
) {
  return handleRequest(req, { params }, 'DELETE');
}

export async function PATCH(
  req: Request,
  { params }: { params: { memberId: string } }
) {
  return handleRequest(req, { params }, 'PATCH');
}
