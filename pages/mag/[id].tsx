import { GetStaticProps, GetStaticPaths } from "next";
import Loading from "../../components/loading";

type Props = {
  id: string;
  buildAt: number;
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  return {
    props: {
      id: context.params.id as string,
      buildAt: Date.now(),
    },
    unstable_revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["/mag/1"], // ここに await getArticleIdsApi() みたいなことできる？
    fallback: true,
  };
};

export default (props: Props) => {
  return (
    <>
      {props.id}: {props.buildAt}
      <Loading />
    </>
  );
};