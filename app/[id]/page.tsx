import Widget from "@/app/[id]/typeform";

type PageProps = {
  params: { id: string };
  searchParams: Record<string, any>;
};

export default function Page({ params: { id }, searchParams }: PageProps) {
  return <Widget id={id} hidden={searchParams || {}} />;
}
