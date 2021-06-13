interface User {
  name: string;
  id: string;
  online: boolean;
  departament?: string;
}

export const getOnline = (users: User[]) => {
  const dto = { department: 'SMB' };
  return users
    .filter((user) => user.online)
    .map((user) => ({ ...user, ...dto }));
};

export const getOnline2 = (users: User[]) => {
  const dto = { department: 'SMB' };
  return users
    .filter((user) => user.online)
    .reduce((accumulator, currentValue) => {
      return [...accumulator, {...currentValue, ...dto}]
    }, [])
};
