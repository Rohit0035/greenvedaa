import CommonBreadcrumb from "@/components/sections/custom/CommonBreadcrumb";
import LoginPrimary from "@/components/sections/login/LoginPrimary";

const LoginMain = () => {
  return (
    <main>
      {/* <HeroPrimary title={"Sign In"} text="Login" /> */}
      <CommonBreadcrumb title="Sign In" label="Home"/>
      <LoginPrimary />
    </main>
  );
};

export default LoginMain;
