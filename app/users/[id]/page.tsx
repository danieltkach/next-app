interface Props {
  params: { id: number; };
}

export const UserDetailPage = ({ params: { id } }: Props) => {
  return (
    <div>UserDetailPage {id}</div>
  );
};
