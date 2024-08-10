import { useState, useEffect, useCallback, memo } from "react";
import { chars } from "../chars";

export const Roulette = memo(() => {
  const [start, setStart] = useState(false);
  const [index, setIndex] = useState(Math.floor(Math.random() * chars.length));

  //ボタンの文言を変更する処理
  const startRoulette = useCallback(() => {
    setStart(!start);
  }, [start]);

  //ルーレットを回す処理
  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setIndex((oldIndex) => {
          if (oldIndex < chars.length - 1) return oldIndex + 1;
          return 0;
        });
      }, 50); //ルーレットの中身を切り替える速度
      return () => clearInterval(interval);
    }
  }, [start]);

  const voicing = (src: string) => new Audio(`/voice/${src}`).play();

  return (
    <div className='flex flex-col justify-center items-center'>
      {(() => {
        const { name, state, imgSrc, voiceSrc } = chars[index];
        return (
          <div className='flex flex-col justify-center items-center h-[500px]'>
            <img
              width={300}
              height={300}
              src={`/img/${imgSrc}`}
              alt={name}
              className='p-2'
            />
            <h2 className='m-2 text-2xl font-medium'>{name}</h2>
            <p className='m-2 text-lg font-medium'>{state}</p>
            {start ? (
              <div></div>
            ) : (
              <button
                className='py-3 px-5 m-3 shadow-lg active:shadow-none bg-yellow-900 text-teal-200'
                onClick={() => voicing(voiceSrc)}>
                声を聴く
              </button>
            )}
          </div>
        );
      })()}

      <div className='h-10'>
        <button
          type='button'
          onClick={startRoulette}
          className='shadow-lg active:shadow-sm py-2 px-8 bg-slate-300'>
          {start ? "STOP" : "ROLL"}
        </button>
      </div>
    </div>
  );
});
