
const AuthLayout = ( {
  children
}: {children: React.ReactNode}) => {
  return (
  <div className="min-h-screen h-auto w-full flex items-center justify-center  bg-no-repeat bg-cover bg-center">
    <div className="bg-zinc-900/80 min-h-screen w-full flex items-center justify-center">
    {children}
    </div>
  </div>
  );
}
export default AuthLayout;