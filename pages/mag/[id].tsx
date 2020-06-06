import { GetStaticProps, GetStaticPaths } from "next";
import Loading from "../../components/loading";
import dayjs from 'dayjs';

type Props = {
  id: string;
  buildAt: string;
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  return {
    props: {
      id: context.params.id as string,
      buildAt: dayjs().format('YYYY年MM月DD日 HH:mm:ss'),
    },
    unstable_revalidate: 10000,
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
      <p>{props.id}: Build At {props.buildAt}</p>
      <p>version: 3</p>
      <Loading />
    </>
  );
};