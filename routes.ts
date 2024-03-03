/**
 * Uma variedade de rotas acessíveis ao público
 * Essas rotas não requerem autenticação
 *
 * @type { string[] }
 */
export const publicRoutes = ["/site"];

/**
 * Uma matriz de rotas usadas para autenticação
 * Essas rotas redirecionarão usuários logados
 *
 * @type { string[] }
 */
export const authRoutes = [
  "/agency/error",
  "/agency/sign-in",
  "/agency/sign-up",
  "/agency/new-verification",
  "/agency/forgot-password",
  "/agency/new-password",
];

/**
 * O prefixo para rotas de autenticação de API
 * Rotas que começam com este prefixo são usadas para fins de autenticação de API
 *
 * @type { string[] }
 */
export const apiAuthPrefix = "/api/auth";

/**
 * O caminho de redirecionamento padrão após o login
 *
 * @type { string[] }
 */
export const DEFAULT_LOGIN_REDIRECT = "/agency";
