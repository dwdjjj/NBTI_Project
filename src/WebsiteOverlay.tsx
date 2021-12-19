import { VFC } from "react";

export const WebsiteOverlay: VFC = () => {
  return (
    <div className="flex flex-col absolute w-full h-full z-10 p-10 text-white">
      <div className="flex">
        <div className="text-lg font-bold uppercase">
          Newdeal Baka Type Indicator
        </div>
        {/* <div className="ml-auto text-4xl font-bold uppercase">
          <BiMenu />
        </div> */}
      </div>
      <div className="flex font-bold flex-col my-auto max-w-[38rem] backdrop-blur-[40px] p-4 rounded-3xl">
        <div className="uppercase text-8xl">NBTI TEST</div>
        <div className="uppercase text-5xl mb-6">Let's Find our Dream!</div>
        <div className="mb-6">
          개발자의 수많은 길 중 아직 나에게 맞는 진로를 선택하지 못했나요?
          <br />
          Newdeal & Baka가 제안하는 간단한 테스트로
          <br /> 나에게 맞는 개발자 유형을 찾고 유익한 정보를 얻으세요.
        </div>
        <button
          onClick={() => (window.location.href = "/TestScreen")}
          className="mr-auto px-6 py-2 bg-white text-lg text-black uppercase rounded-lg font-bold"
        >
          Start
        </button>
      </div>
      {/* <div className="flex text-3xl gap-8 mt-auto">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
      </div> */}
    </div>
  );
};
