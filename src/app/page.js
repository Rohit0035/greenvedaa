import Home2Main from "@/components/layout/main/Home2Main";
import IndexMain from "@/components/layout/main/IndexMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Home() {
  return (
    <PageWrapper isNavbarAppointmentBtn={true}>
      <IndexMain />
    </PageWrapper>
  );
}
