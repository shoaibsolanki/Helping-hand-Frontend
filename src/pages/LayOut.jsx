import Login from "../components/Login";

const LayOut = () => {
  return (
    <div className="w-full relative bg-gray-300 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <section className="flex-1 flex flex-row items-start justify-center pt-[142px] px-5 pb-[146px] box-border bg-[url('/public/background.jpg')] bg-cover bg-no-repeat bg-[top] max-w-full mq525:pt-[92px] mq525:pb-[95px] mq525:box-border">
        {/* <img
          className="h-[652px] w-[1358px] relative object-cover hidden max-w-full"
          alt=""
          src="/background.jpg"
        /> */}
        <Login />
      </section>
    </div>
  );
};

export default LayOut;
