import React, { useEffect, useState } from "react";
import { MAX_PER_PAGE } from "../../../services/fetchData";
import { Select as TabelSort } from "./Select";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import { PageLoader } from "./PageLoader";
import { Button } from "./Button";
import { Form } from "./Form";

export default function Table(props) {
  const [page, setPage] = useState(1);
  const [openForm, setOpenForm] = useState(false);
  const [sort, setSort] = useState({
    orderBy: props.sortOptions[0].value,
    asc: false,
  });
  const { data, isPreviousData, loading } = props.fetchHook({
    page: page,
    sort: sort,
  });
  const { data: nextPageData } = props.fetchHook({
    page: page + 1,
  });
  const hasNextPage = nextPageData?.length > 0;
  useEffect(() => {
    props.setData(data);
  }, [data]);
  function handleOptionChenge(e) {
    const value = e.target.value;
    const asc = value.includes("Asc");
    setSort({
      orderBy: asc ? value.slice(0, -3) : value,
      asc: asc,
    });
  }
  if (loading) {
    return <PageLoader />;
  }
  return (
    <div className="flex min-h-screen flex-col items-center gap-6 bg-background1 px-[4.8rem] pb-[6.4rem] pt-10">
      <div className="flex w-[80%] flex-row justify-between pr-6">
        <h2 className="title">{props.title}</h2>
        <div className="flex flex-row items-center justify-start gap-4 ">
          <TabelSort {...props} handleChenge={handleOptionChenge} />
          <div
            onClick={() => setOpenForm(true)}
            className="aspect-square h-full cursor-pointer  rounded-xl  bg-primary text-center  text-3xl text-background1"
          >
            +
          </div>
        </div>
      </div>
      <table className="w-[80%] max-w-full border-spacing-0 rounded-2xl border border-solid border-background3 bg-background2 text-center capitalize text-grey2">
        <TableHead {...props} page={page} />
        <TableBody {...props} page={page} />
      </table>
      <div className="flex w-[80%] flex-row justify-between">
        <Button
          className="onHoverScale105 aspect-[3/1] h-10 cursor-pointer rounded-2xl border-none bg-primary font-medium text-background1 disabled:scale-100 disabled:bg-[#7d923d]"
          onClick={() => {
            setPage((old) => old - 1);
          }}
          disabled={page === 1 || loading}
        >
          Previous Page
        </Button>
        <Button
          className="onHoverScale105 aspect-[3/1] h-10 cursor-pointer rounded-2xl border-none bg-primary font-medium text-background1 disabled:scale-100 disabled:bg-[#7d923d]"
          onClick={() => {
            setPage((old) => old + 1);
          }}
          disabled={
            isPreviousData ||
            data?.length < MAX_PER_PAGE ||
            loading ||
            !hasNextPage
          }
        >
          Next Page
        </Button>
      </div>
      {openForm && <Form {...props} toggle={setOpenForm} />}
    </div>
  );
}
