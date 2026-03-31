interface AppRoutes {
  root: string;
  list: string;
  detail: string;
  listRickMorty: string;
  menu: string;
}

export const appRoutes: AppRoutes = {
  root: "/",
  list: "/list",
  detail: "/detail/:id",
  listRickMorty: "/list-rick-morty",
  menu: "/menu",
};
