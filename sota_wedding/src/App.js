import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Timeline } from 'antd';
import { SlLocationPin } from "react-icons/sl";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";
import { IoMdHeart } from "react-icons/io";
import { GiMeal } from "react-icons/gi";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoPauseCircleOutline } from "react-icons/io5";
import anh1 from "./Assets/anh1.jpg"
import anh2 from "./Assets/anh2.jpg"
import anh3 from "./Assets/anh3.jpg"
import anh4 from "./Assets/anh4.jpg"
import anh5 from "./Assets/anh5.jpg"
import anh6 from "./Assets/anh6.jpg"
import anh7 from "./Assets/anh7.jpg"
import anh8 from "./Assets/anh8.png"
import anh9 from "./Assets/anh9.jpg"
import anh10 from "./Assets/anh10.jpg"
import anh11 from "./Assets/anh11.jpg"
import anh12 from "./Assets/anh12.jpg"
import anh13 from "./Assets/anh13.jpg"
import anh14 from "./Assets/anh14.jpg"
import anh15 from "./Assets/anh15.jpg"
import anh16 from "./Assets/anh16.jpg"
import anh17 from "./Assets/anh17.jpg"
import anh18 from "./Assets/anh18.jpg"
import anh19 from "./Assets/anh19.jpg"
import anh20 from "./Assets/anh20.jpg"
import anh21 from "./Assets/anh21.jpg"
import anh22 from "./Assets/anh22.jpg"
import anh23 from "./Assets/anh23.jpg"
import name1 from "./Assets/name1.png"
import name2 from "./Assets/name2.png"
import thang4 from "./Assets/thang4.png"
import heart from "./Assets/heart.png"
import dresscode from "./Assets/dresscode.png"
import loicamon from "./Assets/loicamon.png"
import album from "./Assets/album.png"
import time from "./Assets/time.png"
import match1 from "./Assets/match1.png"
import match2 from "./Assets/match2.png"
import match3 from "./Assets/match3.png"
import thankyou from "./Assets/thankyou.jpg"
import music from "./Assets/music.mp3"

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(music));
  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    const invited1 = document.getElementById('invited1');
    const invited2 = document.getElementById('invited2');
    const codau = document.getElementById('codau');
    const textcodau = document.getElementById('textcodau');
    const chure = document.getElementById('chure');
    const textchure = document.getElementById('textchure');
    const tiecmung = document.getElementById('tiecmung');
    const timeline1 = document.getElementById('timeline1');
    const timeline2 = document.getElementById('timeline2');
    const timeline3 = document.getElementById('timeline3');
    const loicamonElem = document.getElementById('loicamon');
    const textanh1 = document.getElementById('textanh1');
    const textanh2 = document.getElementById('textanh2');
    const textanh3 = document.getElementById('textanh3');
    const textanh4 = document.getElementById('textanh4');
    const album = document.getElementById('album');
    const albumanh1 = document.getElementById('albumanh1');
    const albumanh2 = document.getElementById('albumanh2');
    const albumanh3 = document.getElementById('albumanh3');
    const albumanh4 = document.getElementById('albumanh4');
    const albumanh5 = document.getElementById('albumanh5');
    const albumanh6 = document.getElementById('albumanh6');
    const albumanh7 = document.getElementById('albumanh7');
    const albumanh8 = document.getElementById('albumanh8');
    const albumanh9 = document.getElementById('albumanh9');
    const albumanh10 = document.getElementById('albumanh10');
    const albumanh11 = document.getElementById('albumanh11');
    const albumanh12 = document.getElementById('albumanh12');
    const albumanh13 = document.getElementById('albumanh13');
    const albumanh14 = document.getElementById('albumanh14');
    const albumanh15 = document.getElementById('albumanh15');
    const albumanh16 = document.getElementById('albumanh16');
    const tinder1 = document.getElementById('tinder1');
    const tinder2 = document.getElementById('tinder2');
    const tinder3 = document.getElementById('tinder3');
    window.onscroll = () => {
      let top = window.scrollY;
      let offsetcodau = 100;
      let offsettextcodau = 120;
      let offsetchure = 250;
      let offsettextchure = 270;
      let offsetInvited1 = 1100;
      let offsetInvited2 = 1150;
      let offsetTiecmung = 1700;
      let offsetTimeline1 = 2350;
      let offsetTimeline2 = 2500;
      let offsetTimeline3 = 2650;
      let offsetloicamon = 2950;
      let offsettextanh1 = 3250;
      let offsettextanh2 = 3550;
      let offsettextanh3 = 5150;
      let offsettextanh4 = 5350;
      let offsetalbum = 3150;
      let offsetalbumanh1 = 3250;
      let offsetalbumanh2 = 3450;
      let offsetalbumanh3 = 3700;
      let offsetalbumanh4 = 3750;
      let offsetalbumanh5 = 3800;
      let offsetalbumanh6 = 4050;
      let offsetalbumanh7 = 4050;
      let offsetalbumanh8 = 4300;
      let offsetalbumanh9 = 4300;
      let offsetalbumanh10 = 4600;
      let offsetalbumanh11 = 4600;
      let offsetalbumanh12 = 5000;
      let offsetalbumanh13 = 4900;
      let offsetalbumanh14 = 4950;
      let offsetalbumanh15 = 5150;
      let offsetalbumanh16 = 5350;
      let offsettinder1 = 900;
      let offsettinder2 = 1000;
      let offsettinder3 = 1100;
      let heightinvited1 = invited1.offsetHeight;
      let heightinvited2 = invited2.offsetHeight;
      let heightcodau = codau.offsetHeight;
      let heighttextcodau = textcodau.offsetHeight;
      let heightchure = chure.offsetHeight;
      let heighttextchure = textchure.offsetHeight;
      let heighttiecmung = tiecmung.offsetHeight;
      let heighttimeline1 = timeline1.offsetHeight;
      let heighttimeline2 = timeline2.offsetHeight;
      let heighttimeline3 = timeline3.offsetHeight;
      let heightloicamon = loicamonElem.offsetHeight;
      let heighttextanh1 = textanh1.offsetHeight;
      let heighttextanh2 = textanh2.offsetHeight;
      let heighttextanh3 = textanh3.offsetHeight;
      let heighttextanh4 = textanh4.offsetHeight;
      let heightalbum = album.offsetHeight;
      let heightalbumanh1 = albumanh1.offsetHeight;
      let heightalbumanh2 = albumanh2.offsetHeight;
      let heightalbumanh3 = albumanh3.offsetHeight;
      let heightalbumanh4 = albumanh4.offsetHeight;
      let heightalbumanh5 = albumanh5.offsetHeight;
      let heightalbumanh6 = albumanh6.offsetHeight;
      let heightalbumanh7 = albumanh7.offsetHeight;
      let heightalbumanh8 = albumanh8.offsetHeight;
      let heightalbumanh9 = albumanh9.offsetHeight;
      let heightalbumanh10 = albumanh10.offsetHeight;
      let heightalbumanh11 = albumanh11.offsetHeight;
      let heightalbumanh12 = albumanh12.offsetHeight;
      let heightalbumanh13 = albumanh13.offsetHeight;
      let heightalbumanh14 = albumanh14.offsetHeight;
      let heightalbumanh15 = albumanh15.offsetHeight;
      let heightalbumanh16 = albumanh16.offsetHeight;
      let heighttinder1 = tinder1.offsetHeight;
      let heighttinder2 = tinder2.offsetHeight;
      let heighttinder3 = tinder3.offsetHeight;

      console.log(top, offsetInvited1, heightinvited1)
      if (top >= offsettinder1 && top < (offsettinder1 + 2000 + heighttinder1)) {
        tinder1.classList.remove('invisible')
        tinder1.classList.add('slideUp')
      }

      if (top < offsettinder1 || top > (offsettinder1 + 2000 + heighttinder1)) {
        tinder1.classList.remove('slideUp')
      }

      if (top >= offsettinder2 && top < (offsettinder2 + 2000 + heighttinder2)) {
        tinder2.classList.remove('invisible')
        tinder2.classList.add('slideUp')
      }

      if (top < offsettinder2 || top > (offsettinder2 + 2000 + heighttinder2)) {
        tinder2.classList.remove('slideUp')
      }

      if (top >= offsettinder3 && top < (offsettinder3 + 2000 + heighttinder3)) {
        tinder3.classList.remove('invisible')
        tinder3.classList.add('slideUp')
      }

      if (top < offsettinder3 || top > (offsettinder3 + 2000 + heighttinder3)) {
        tinder3.classList.remove('slideUp')
      }

      if (top >= offsetInvited1 && top < (offsetInvited1 + 2000 + heightinvited1)) {
        invited1.classList.add('slideUp')
      }

      if (top < offsetInvited1 || top > (offsetInvited1 + 2000 + heightinvited1)) {
        invited1.classList.remove('slideUp')
      }

      if (top >= offsetInvited2 && top < (offsetInvited2 + 2000 + heightinvited2)) {
        invited2.classList.add('slideUp')
      }

      if (top < offsetInvited2 || top > (offsetInvited2 + 2000 + heightinvited2)) {
        invited2.classList.remove('slideUp')
      }

      if (top >= offsetcodau && top < (offsetcodau + 2000 + heightcodau)) {
        codau.classList.add('slideLeft')
      }

      if (top < offsetcodau || top > (offsetcodau + 2000 + heightcodau)) {
        codau.classList.remove('slideLeft')
      }

      if (top >= offsettextcodau && top < (offsettextcodau + 2000 + heighttextcodau)) {
        textcodau.classList.add('slideLeft')
      }

      if (top < offsettextcodau || top > (offsettextcodau + 2000 + heighttextcodau)) {
        textcodau.classList.remove('slideLeft')
      }

      if (top >= offsetchure && top < (offsetchure + 2000 + heightchure)) {
        chure.classList.add('slideRight')
      }

      if (top < offsetchure || top > (offsetchure + 2000 + heightchure)) {
        chure.classList.remove('slideRight')
      }

      if (top >= offsettextchure && top < (offsettextchure + 2000 + heighttextchure)) {
        textchure.classList.add('slideRight')
      }

      if (top < offsettextchure || top > (offsettextchure + 2000 + heighttextchure)) {
        textchure.classList.remove('slideRight')
      }

      if (top >= offsetTiecmung && top < (offsetTiecmung + 2000 + heighttiecmung)) {
        tiecmung.classList.add('pulse-not-infi')
      }

      if (top < offsetTiecmung || top > (offsetTiecmung + 2000 + heighttiecmung)) {
        tiecmung.classList.remove('pulse-not-infi')
      }

      if (top >= offsetTimeline1 && top < (offsetTimeline1 + 2000 + heighttimeline1)) {
        timeline1.classList.add('slideLeft')
      }

      if (top < offsetTimeline1 || top > (offsetTimeline1 + 2000 + heighttimeline1)) {
        timeline1.classList.remove('slideLeft')
      }

      if (top >= offsetTimeline3 && top < (offsetTimeline3 + 2000 + heighttimeline3)) {
        timeline3.classList.add('slideLeft')
      }

      if (top < offsetTimeline3 || top > (offsetTimeline3 + 2000 + heighttimeline3)) {
        timeline3.classList.remove('slideLeft')
      }

      if (top >= offsetTimeline2 && top < (offsetTimeline2 + 2000 + heighttimeline2)) {
        timeline2.classList.add('slideRight')
      }

      if (top < offsetTimeline2 || top > (offsetTimeline2 + 2000 + heighttimeline2)) {
        timeline2.classList.remove('slideRight')
      }

      if (top >= offsetloicamon && top < (offsetloicamon + 2000 + heightloicamon)) {
        loicamonElem.classList.add('slideLeft')
      }

      if (top < offsetloicamon || top > (offsetloicamon + 2000 + heightloicamon)) {
        loicamonElem.classList.remove('slideLeft')
      }

      if (top >= offsetalbum && top < (offsetalbum + 2000 + heightalbum)) {
        album.classList.add('slideRight-album')
      }

      if (top < offsetalbum || top > (offsetalbum + 2000 + heightalbum)) {
        album.classList.remove('slideRight-album')
      }

      if (top >= offsettextanh1 && top < (offsettextanh1 + 2000 + heighttextanh1)) {
        textanh1.classList.remove('invisible')
        textanh1.classList.add('floating')
      }

      if (top < offsettextanh1 || top > (offsettextanh1 + 2000 + heighttextanh1)) {
        textanh1.classList.remove('floating')
      }

      if (top >= offsettextanh2 && top < (offsettextanh2 + 2000 + heighttextanh2)) {
        textanh2.classList.remove('invisible')
        textanh2.classList.add('slideLeft')
      }

      if (top < offsettextanh2 || top > (offsettextanh2 + 2000 + heighttextanh2)) {
        textanh2.classList.remove('slideLeft')
      }

      if (top >= offsetalbumanh1 && top < (offsetalbumanh1 + 2000 + heightalbumanh1)) {
        albumanh1.classList.remove('invisible')
        albumanh1.classList.add('animation')
      }

      if (top < offsetalbumanh1 || top > (offsetalbumanh1 + 2000 + heightalbumanh1)) {
        albumanh1.classList.remove('animation')
      }

      if (top >= offsetalbumanh2 && top < (offsetalbumanh2 + 2000 + heightalbumanh2)) {
        albumanh2.classList.remove('invisible')
        albumanh2.classList.add('animation')
      }

      if (top < offsetalbumanh2 || top > (offsetalbumanh2 + 2000 + heightalbumanh2)) {
        albumanh2.classList.remove('animation')
      }

      if (top >= offsetalbumanh3 && top < (offsetalbumanh3 + 2000 + heightalbumanh3)) {
        albumanh3.classList.remove('invisible')
        albumanh3.classList.add('slideLeft-less')
      }

      if (top < offsetalbumanh3 || top > (offsetalbumanh3 + 2000 + heightalbumanh3)) {
        albumanh3.classList.remove('slideLeft-less')
      }

      if (top >= offsetalbumanh4 && top < (offsetalbumanh4 + 2000 + heightalbumanh4)) {
        albumanh4.classList.remove('invisible')
        albumanh4.classList.add('slideLeft-less')
      }

      if (top < offsetalbumanh4 || top > (offsetalbumanh4 + 2000 + heightalbumanh4)) {
        albumanh4.classList.remove('slideLeft-less')
      }

      if (top >= offsetalbumanh5 && top < (offsetalbumanh5 + 2000 + heightalbumanh5)) {
        albumanh5.classList.remove('invisible')
        albumanh5.classList.add('slideLeft-less')
      }

      if (top < offsetalbumanh5 || top > (offsetalbumanh5 + 2000 + heightalbumanh5)) {
        albumanh5.classList.remove('slideLeft-less')
      }

      if (top >= offsetalbumanh6 && top < (offsetalbumanh6 + 2000 + heightalbumanh6)) {
        albumanh6.classList.remove('invisible')
        albumanh6.classList.add('slideOut-left')
      }

      if (top < offsetalbumanh6 || top > (offsetalbumanh6 + 2000 + heightalbumanh6)) {
        albumanh6.classList.remove('slideOut-left')
      }

      if (top >= offsetalbumanh7 && top < (offsetalbumanh7 + 2000 + heightalbumanh7)) {
        albumanh7.classList.remove('invisible')
        albumanh7.classList.add('slideOut-right')
      }

      if (top < offsetalbumanh7 || top > (offsetalbumanh7 + 2000 + heightalbumanh7)) {
        albumanh7.classList.remove('slideOut-right')
      }

      if (top >= offsetalbumanh8 && top < (offsetalbumanh8 + 2000 + heightalbumanh8)) {
        albumanh8.classList.remove('invisible')
        albumanh8.classList.add('slideOut-left')
      }

      if (top < offsetalbumanh8 || top > (offsetalbumanh8 + 2000 + heightalbumanh8)) {
        albumanh8.classList.remove('slideOut-left')
      }

      if (top >= offsetalbumanh9 && top < (offsetalbumanh9 + 2000 + heightalbumanh9)) {
        albumanh9.classList.remove('invisible')
        albumanh9.classList.add('slideOut-right')
      }

      if (top < offsetalbumanh9 || top > (offsetalbumanh9 + 2000 + heightalbumanh9)) {
        albumanh9.classList.remove('slideOut-right')
      }

      if (top >= offsetalbumanh10 && top < (offsetalbumanh10 + 2000 + heightalbumanh10)) {
        albumanh10.classList.remove('invisible')
        albumanh10.classList.add('slideOut-left')
      }

      if (top < offsetalbumanh10 || top > (offsetalbumanh10 + 2000 + heightalbumanh10)) {
        albumanh10.classList.remove('slideOut-left')
      }

      if (top >= offsetalbumanh11 && top < (offsetalbumanh11 + 2000 + heightalbumanh11)) {
        albumanh11.classList.remove('invisible')
        albumanh11.classList.add('slideOut-right')
      }

      if (top < offsetalbumanh11 || top > (offsetalbumanh11 + 2000 + heightalbumanh11)) {
        albumanh11.classList.remove('slideOut-right')
      }

      if (top >= offsetalbumanh12 && top < (offsetalbumanh12 + 2000 + heightalbumanh12)) {
        albumanh12.classList.remove('invisible')
        albumanh12.classList.add('slideRight-less')
      }

      if (top < offsetalbumanh12 || top > (offsetalbumanh12 + 2000 + heightalbumanh12)) {
        albumanh12.classList.remove('slideRight-less')
      }

      if (top >= offsetalbumanh13 && top < (offsetalbumanh13 + 2000 + heightalbumanh13)) {
        albumanh13.classList.remove('invisible')
        albumanh13.classList.add('slideRight-less')
      }

      if (top < offsetalbumanh13 || top > (offsetalbumanh13 + 2000 + heightalbumanh13)) {
        albumanh13.classList.remove('slideRight-less')
      }

      if (top >= offsetalbumanh14 && top < (offsetalbumanh14 + 2000 + heightalbumanh14)) {
        albumanh14.classList.remove('invisible')
        albumanh14.classList.add('slideRight-less')
      }

      if (top < offsetalbumanh14 || top > (offsetalbumanh14 + 2000 + heightalbumanh14)) {
        albumanh14.classList.remove('slideRight-less')
      }

      if (top >= offsetalbumanh15 && top < (offsetalbumanh15 + 2000 + heightalbumanh15)) {
        albumanh15.classList.remove('invisible')
        albumanh15.classList.add('floating')
      }

      if (top < offsetalbumanh15 || top > (offsetalbumanh15 + 2000 + heightalbumanh15)) {
        albumanh15.classList.remove('floating')
      }

      if (top >= offsetalbumanh16 && top < (offsetalbumanh16 + 2000 + heightalbumanh16)) {
        albumanh16.classList.remove('invisible')
        albumanh16.classList.add('slideLeft-less')
      }

      if (top < offsetalbumanh16 || top > (offsetalbumanh16 + 2000 + heightalbumanh16)) {
        albumanh16.classList.remove('slideLeft-less')
      }

      if (top >= offsettextanh3 && top < (offsettextanh3 + 2000 + heighttextanh3)) {
        textanh3.classList.remove('invisible')
        textanh3.classList.add('floating')
      }

      if (top < offsettextanh3 || top > (offsettextanh3 + 2000 + heighttextanh3)) {
        textanh3.classList.remove('floating')
      }

      if (top >= offsettextanh4 && top < (offsettextanh4 + 2000 + heighttextanh4)) {
        textanh4.classList.remove('invisible')
        textanh4.classList.add('floating')
      }

      if (top < offsettextanh4 || top > (offsettextanh4 + 2000 + heighttextanh4)) {
        textanh4.classList.remove('floating')
      }
    }
  })
  const targetDate = new Date('2024-04-20T17:00:00');
  // Function to calculate the time remaining
  function calculateTimeRemaining() {
    const now = new Date(); // Current date and time
    const timeDifference = targetDate - now; // Difference in milliseconds

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds };
    } else {
      // The target date has passed
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  useEffect(() => {
    function updateCountdown() {
      const time = calculateTimeRemaining();
      const countdownElement = document.getElementById('countdown');

      countdownElement.textContent = `${time.days}d : ${time.hours}h : ${time.minutes}m : ${time.seconds}s`;
    }

    setInterval(updateCountdown, 1000);

    updateCountdown();
  })

  return (
    <div className="flex items-center justify-center font-mono">
      <div className="App">
        <img src={anh1} alt='anh1' className='imgFit' />
        <div className='pt-8 pb-6 px-6'>
          <p className='text-center tracking-wide text-[12px]'>"Hôn nhân không phải là một điểm đến mà là một cuộc hành trình, nơi mà hai người cùng nhau xây dựng và phát triển."</p>
        </div>
        <div className='disp-grid'>
          <img src={anh2} alt='anh2' className='imgFit ' />
          <div className='flex flex-col text-black items-center w-full px-5'>
            <p className='uppercase font-bold mb-[-10px]'>Cô dâu</p>
            <img src={name1} alt='name1' className='imgFit' id='codau' />
            <p className='text-justify text-[12px] mt-[-10px]' id='textcodau'>Với em, Tình yêu của chúng mình là một câu chuyện cổ tích. Em tin mình sẽ cùng chắp bút và viết nên những chương tiếp theo một cách đầy ngọt ngào và trọn vẹn. Cảm ơn anh đã tới nắm tay em và cùng em đi hết chặng đường đời này.</p>
          </div>
        </div>
        <div className='disp-grid mt-10'>
          <div className='flex flex-col text-black items-center w-full px-5 hidden lit:block'>
            <p className='uppercase font-bold mb-[-10px]'>Chú rể</p>
            <img src={name2} alt='name2' className='imgFit' id='chure' />
            <p className='text-justify text-[12px] mt-[-10px]' id='textchure'>Gặp được em có lẽ là điều tuyệt vời nhất trong cuộc đời anh. Anh đã rất hạnh phúc khi em đồng ý sẽ bước cùng anh trên chặng đường dài sắp tới. Anh sẽ cố gắng thật nhiều để em trở thành người phụ nữ hạnh phúc nhất!</p>
          </div>
          <img src={anh3} alt='anh3' className='imgFit ' />
          <div className='flex flex-col text-black items-center w-full px-5 lit:hidden'>
            <p className='uppercase font-bold mb-[-10px]'>Chú rể</p>
            <img src={name2} alt='name2' className='imgFit' />
            <p className='text-justify text-[14px] mt-[-10px]'>Gặp được em có lẽ là điều tuyệt vời nhất trong cuộc đời anh. Anh đã rất hạnh phúc khi em đồng ý sẽ bước cùng anh trên chặng đường dài sắp tới. Anh sẽ cố gắng thật nhiều để em trở thành người phụ nữ hạnh phúc nhất!</p>
          </div>
        </div>
        <div className='relative'>
          <img src={match1} alt='match1' className='imgFit invisible absolute top-[150px]' id='tinder1' />
          <img src={match2} alt='match2' className='imgFit invisible absolute top-[150px]' id='tinder2' />
          <img src={match3} alt='match3' className='imgFit invisible absolute top-[150px]' id='tinder3' />
          <img src={anh23} alt='anh23' className='imgFit mt-4' />
        </div>
        <div className='p-4 flex flex-col gap-3 items-center justify-center'>
          <hr class="rounded w-[20%]"></hr>
          <p id='invited1'>Thân mời</p>
          <p id='invited2'>Đến dự lễ cưới của chúng mình</p>
        </div>
        <img src={anh4} alt='anh4' className='imgFit' />
        <div className='flex justify-center items-center mt-4 '>
          <img src={thang4} alt='thang4' className='w-[30%] object-cover pulse' />
        </div>
        <div className='px-3 mt-2'>
          <table className='w-full'>
            <tr>
              <th><div className='flex justify-center p-2 uppercase'>Mon</div></th>
              <th><div className='flex justify-center p-2 uppercase'>Tue</div></th>
              <th><div className='flex justify-center p-2 uppercase'>Wed</div></th>
              <th><div className='flex justify-center p-2 uppercase'>Thur</div></th>
              <th><div className='flex justify-center p-2 uppercase'>Fri</div></th>
              <th><div className='flex justify-center p-2 uppercase'>Sat</div></th>
              <th><div className='flex justify-center p-2 uppercase'>Sun</div></th>
            </tr>
            <tr>
              <td><div className='flex justify-center p-2'>1</div></td>
              <td><div className='flex justify-center p-2'>2</div></td>
              <td><div className='flex justify-center p-2'>3</div></td>
              <td><div className='flex justify-center p-2'>4</div></td>
              <td><div className='flex justify-center p-2'>5</div></td>
              <td><div className='flex justify-center p-2'>6</div></td>
              <td><div className='flex justify-center p-2'>7</div></td>
            </tr>
            <tr>
              <td><div className='flex justify-center p-2'>8</div></td>
              <td><div className='flex justify-center p-2'>9</div></td>
              <td><div className='flex justify-center p-2'>10</div></td>
              <td><div className='flex justify-center p-2'>11</div></td>
              <td><div className='flex justify-center p-2'>12</div></td>
              <td><div className='flex justify-center p-2'>13</div></td>
              <td><div className='flex justify-center p-2'>14</div></td>
            </tr>
            <tr>
              <td><div className='flex justify-center p-2'>15</div></td>
              <td><div className='flex justify-center p-2'>16</div></td>
              <td><div className='flex justify-center p-2'>17</div></td>
              <td><div className='flex justify-center p-2'>18</div></td>
              <td><div className='flex justify-center p-2'>19</div></td>
              <td>
                <div className='flex justify-center p-2 font-bold relative'>
                  <span>20</span>
                  <img src={heart} alt='thang4' className='imgFit pulse absolute top-[-4px]' />
                </div>
              </td>
              <td><div className='flex justify-center p-2'>21</div></td>
            </tr>
            <tr>
              <td><div className='flex justify-center p-2'>22</div></td>
              <td><div className='flex justify-center p-2'>23</div></td>
              <td><div className='flex justify-center p-2'>24</div></td>
              <td><div className='flex justify-center p-2'>25</div></td>
              <td><div className='flex justify-center p-2'>26</div></td>
              <td><div className='flex justify-center p-2'>27</div></td>
              <td><div className='flex justify-center p-2'>28</div></td>
            </tr>
            <tr>
              <td><div className='flex justify-center p-2'>29</div></td>
              <td><div className='flex justify-center p-2'>30</div></td>
            </tr>
          </table>
        </div>
        <div className='px-11 py-6'>
          <p className='uppercase text-center' id='tiecmung'>Tiệc mừng lễ thành hôn được tổ chức vào lúc 17 giờ 30 phút</p>
        </div>
        <div className='px-10 flex flex-row '>
          <div className='flex-1 flex justify-center flex-col items-center'>
            <p className='uppercase'>Tháng</p>
            <p className=''>04</p>
          </div>
          <div className='flex-1 flex justify-center middle-date flex-col items-center relative'>
            <p className='uppercase'>Thứ 7</p>
            <p className='text-white'>20</p>
            <p className='absolute text-[35px] top-[22px]'>20</p>
          </div>
          <div className='flex-1 flex justify-center flex-col items-center'>
            <p className='uppercase'>Năm</p>
            <p className=''>2024</p>
          </div>
        </div>
        <div className='mt-6 flex flex-col gap-3 justify-center items-center'>
          <p>(Tức ngày 12 tháng 03 năm Giáp Thìn)</p>
          <div className='flex flex-col items-center gap-1 justify-center'>
            <p className='uppercase text-[20px]'>Tại trung tâm tiệc cưới</p>
            <p className='uppercase text-[20px]'>Trống đồng</p>
            <p className='uppercase text-[14px] px-10 text-center'>Sảnh tiệc tầng 2 - Số 489 Hoàng Quốc Việt, Bắc Từ Liêm, Hà Nội</p>
          </div>
        </div>
        <a className='mt-8 flex items-center justify-center gap-2 text-[20px] pulse' href='https://maps.app.goo.gl/M1bpY9EmCum4kfox7'>
          <SlLocationPin /><span className='uppercase'>Chỉ đường</span>
        </a>
        <img src={anh5} alt='anh5' className='imgFit mt-10' />
        <div className='mt-1 flex flex-col gap-3 justify-center items-center'>
          <p className='uppercase mb-9'>Quan trọng</p>
          <Timeline
            mode="alternate"
            className='relative'
            items={[
              {
                color: 'black',
                children: <div className='flex flex-col justify-center items-center w-[150px] font-mono'>
                  <MdOutlinePhotoCamera className='text-[50px] text-white' />
                  <p className='font-bold text-white'>16:30</p>
                  <p className='text-white'>Đón khách</p>
                  <div className='flex flex-col justify-center items-center w-[150px] font-mono absolute top-[-25px]' id='timeline1'>
                    <MdOutlinePhotoCamera className='text-[50px]' />
                    <p className='font-bold'>16:30</p>
                    <p>Đón khách</p>
                  </div>
                </div>,
              },
              {
                color: 'black',
                children: <div className='flex flex-col justify-center items-center w-[150px] mr-[200px] font-mono'>
                  <GiMeal className='text-[50px] text-white' />
                  <p className='font-bold text-white'>17:30</p>
                  <p className='text-white'>Khai tiệc</p>
                  <p className='mt-[-3px] text-white'>& Lễ thành hôn</p>
                  <div className='flex flex-col justify-center items-center font-mono absolute top-[-35px]' id='timeline2'>
                    <GiMeal className='text-[50px]' />
                    <p className='font-bold'>17:30</p>
                    <p>Khai tiệc</p>
                    <p className='mt-[-3px]'>& Lễ thành hôn</p>
                  </div>
                </div>,
              },
              {
                color: 'black',
                children: <div className='flex flex-col justify-center items-center w-[150px] font-mono' >
                  <LuAlarmClock className='text-[50px] text-white' />
                  <p className='font-bold text-white'>20:00</p>
                  <p className='text-white'>Kết thúc tiệc</p>
                  <div className='flex flex-col justify-center items-center w-[150px] font-mono absolute top-[-25px]' id='timeline3'>
                    <LuAlarmClock className='text-[50px]' />
                    <p className='font-bold'>20:00</p>
                    <p>Kết thúc tiệc</p>
                  </div>
                </div>,
              },
            ]}
          />
        </div>
        <div className='loicamon relative'>
          <img src={anh6} alt='anh6' className='imgFit' />
          <div className='flex flex-col items-center'>
            <img src={dresscode} alt='dresscode' className='imgFit pulse' />
            <p className='mt-[-10px] text-center'>Whatever you want</p>
          </div>
          <img src={loicamon} alt='loicamon' className='w-[70%] object-cover absolute bottom-[-50px] right-0' id='loicamon' />
        </div>
        <div className='flex flex-col justify-center px-5 pt-8'>
          <p className='text-center'>"Sẽ thật hạnh phúc nếu được gặp quý vị trong ngày trọng đại này.</p>
          <p className='text-center'>Xin gửi lời cảm ơn từ đáy lòng vì những lời chúc tốt đẹp và sự hiện diện của quý vị."</p>
        </div>
        <img src={album} alt='album' className='imgFit mt-6' id='album' />
        <div className='mt-6 px-2 flex flex-row'>
          <div className='flex-1 flex flex-col items-center'>
            <img src={anh7} alt='anh7' className='imgFit pr-1 invisible' id='albumanh1' />
            <p className='py-2 text-justify invisible' id='textanh1'>Ngày hôm nay tia nắng ấy chỉ thuộc về riêng anh, anh mong rằng sau này ngày nào thức dậy anh cũng được thấy tia nắng ấy!</p>
            <img src={anh9} alt='anh9' className='imgFit h-[272px] pr-1 invisible' id='albumanh3' />
            <img src={anh12} alt='anh12' className='imgFit pt-2 pr-1 invisible' id='albumanh6' />
            <img src={anh15} alt='anh15' className='imgFit pt-2 pr-1 invisible' id='albumanh8' />
            <img src={anh17} alt='anh17' className='imgFit pt-2 pr-1 invisible' id='albumanh10' />
            <img src={anh18} alt='anh18' className='imgFit pr-1 pt-2 invisible' id='albumanh13' />
            <img src={anh19} alt='anh19' className='imgFit pr-1 pt-2 invisible' id='albumanh14' />
          </div>
          <div className='flex-1 flex flex-col items-center'>
            <p className='pb-2 pl-2 text-justify invisible' id='textanh2'>Một ngày nắng đẹp anh gặp em, anh bỗng biết rằng thì ra còn có những thứ đẹp hơn cả nắng. Chính là nụ cười của em</p>
            <img src={anh8} alt='anh8' className='imgFit pl-1 invisible' id='albumanh2' />
            <img src={anh10} alt='anh10' className='imgFit pl-1 pt-2 invisible' id='albumanh4' />
            <img src={anh11} alt='anh11' className='imgFit pl-1 pt-2 invisible' id='albumanh5' />
            <img src={anh13} alt='anh13' className='imgFit pt-2 pl-1 invisible' id='albumanh7' />
            <img src={anh14} alt='anh14' className='imgFit pt-2 pl-1 invisible' id='albumanh9' />
            <img src={anh16} alt='anh16' className='imgFit pt-2 pl-1 invisible' id='albumanh11' />
            <img src={anh20} alt='anh20' className='imgFit h-[280px] pl-1 pt-2 invisible' id='albumanh12' />
          </div>
        </div>
        <div className='notcainay px-2 mt-2'>
          <img src={anh21} alt='anh21' className='imgFit invisible' id='albumanh15' />
          <p className='text-[12px] text-left px-1 invisible' id='textanh3'>‘Our love story is my favorite tale, and I promise to continue writing it with you, chaper by chaper, for all the days of your lives’</p>
        </div>
        <div className='notcainay1 px-2 mt-2'>
          <p className='text-[12px] text-center px-2 invisible' id='textanh4'>‘True love is eternal, transcending time and space, forever woven into the fabric of existence.’</p>
          <img src={anh22} alt='anh22' className='imgFit invisible' id='albumanh16' />
        </div>
        <div className='relative'>
          <img src={time} alt='time' className='imgFit mt-3' />
          <p className='absolute text-[24px] top-[80px] left-[30px] tracking-[-0.1em]' id="countdown"></p>
          <IoMdHeart className='text-[30px] absolute top-[85px] right-[30px]' />
        </div>
        <img src={thankyou} alt='thankyou' className='imgFit mt-3' />
        <div className='fixed bottom-0 right-0'>
          <button onClick={togglePlay}>
            {isPlaying ? <IoPauseCircleOutline className='text-[50px] text-white  bg-black rounded-[50px]'/> 
            : 
            <IoPlayCircleOutline className='text-[50px] text-white bg-black  rounded-[50px]'/>}
          </button>
        </div>
      </div>
    </div >
  );
}

export default App;
