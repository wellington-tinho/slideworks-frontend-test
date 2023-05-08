import { Pagination as PaginationMantine } from "@mantine/core";

interface IPaginationProps {
  activePage: number;
  setPage: (page: number) => void;
  total: number;
}

export default function Pagination({
  activePage,
  setPage,
  total,
}: IPaginationProps) {
  return (
    <PaginationMantine
      value={activePage}
      onChange={setPage}
      total={total}
      color="violet.5"
      className="mt-[43px]"
      styles={(theme) => ({
        control: {
          "&": {
            borderColor: theme.colors.gray[3],
            color: theme.colors.violet[4],
          },
        },
      })}
    />
  );
}
