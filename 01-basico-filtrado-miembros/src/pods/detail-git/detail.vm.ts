export interface MemberGitDetailEntity {
  login: string; // nombre de usuario GitHub
  avatar_url: string; // URL del avatar
  name: string | null; // nombre completo (puede ser null)
  company: string | null; // empresa
  location: string | null; // ubicación
  blog: string | null; // blog personal
  bio: string | null; // biografía
  public_repos: number; // repos públicos
  public_gists: number; // gists públicos
  followers: number; // seguidores
  following: number; // seguidos
  created_at: string; // fecha de creación
  updated_at: string; // fecha de actualización
}
