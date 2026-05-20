import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

type RouteContext = {
  params: {
    path: string[];
  };
};

const hopByHopHeaders = new Set([
  'connection',
  'content-length',
  'host',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailer',
  'transfer-encoding',
  'upgrade',
]);

const getApiInternalUrl = () => {
  return process.env.API_INTERNAL_URL ?? process.env.API_URL ?? 'http://localhost:3000';
};

const getProxyHeaders = (request: NextRequest) => {
  const headers = new Headers();

  request.headers.forEach((value, key) => {
    if (!hopByHopHeaders.has(key.toLowerCase())) {
      headers.set(key, value);
    }
  });

  return headers;
};

const getTargetUrl = (request: NextRequest, context: RouteContext) => {
  const requestUrl = new URL(request.url);
  const pathname = context.params.path.join('/');

  return new URL(`/${pathname}${requestUrl.search}`, getApiInternalUrl());
};

const proxy = async (request: NextRequest, context: RouteContext) => {
  const headers = getProxyHeaders(request);
  const method = request.method.toUpperCase();
  const init: RequestInit = {
    method,
    headers,
    redirect: 'manual',
  };

  if (method !== 'GET' && method !== 'HEAD') {
    init.body = await request.arrayBuffer();
  }

  const response = await fetch(getTargetUrl(request, context), init);
  const responseHeaders = new Headers(response.headers);

  responseHeaders.delete('content-encoding');
  responseHeaders.delete('content-length');
  responseHeaders.delete('transfer-encoding');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders,
  });
};

export const GET = proxy;
export const POST = proxy;
export const PUT = proxy;
export const PATCH = proxy;
export const DELETE = proxy;
export const HEAD = proxy;
