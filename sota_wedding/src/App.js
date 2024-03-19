import { useEffect } from 'react';
import './App.css';
import { Timeline } from 'antd';

function App() {
  useEffect(() => {
    const test = document.getElementById('testimage');
    window.onscroll = () => {
      let top = window.scrollY;
      let offset = 2306;
      let height = test.offsetHeight;

        console.log(top, offset, height)
      if(top >= offset && top < (offset + 500 + height)){
        test.classList.add('animation')
      }
      else {
        test.classList.remove('animation')
      }
    }
  })
  return (
    <div className="flex items-center justify-center">
      <div className="App">
        <div className="h-[500px] w-full bg-black">
          ảnh 1
        </div>
        <div className='pt-8 pb-6 px-6'>
          <p className='text-center tracking-wide text-[14px]'>"Hôn nhân không phải là một điểm đến mà là một cuộc hành trình, nơi mà hai người cùng nhau xây dựng và phát triển."</p>
        </div>
        <div className='flex flex-row '>
          <div className="h-[300px] bg-black w-[320px]">
            ảnh 2
          </div>
          <div className='flex flex-col text-black items-center w-full px-3'>
            <p className='uppercase'>Cô dâu</p>
            <p className='font-bold'>Trần Phương Thảo</p>
            <p className='text-justify pt-3'>Em - một cô gái đa sầu đa cảm, thật may mắn khi gặp được anh. Cảm ơn anh luôn quan tâm, chăm sóc em thật nhiều, nuông chiều những khi em giận hờn vô cớ. Bắt đầu từ hôm nay chúng ta sẽ viết lên một chương mới của cuộc đời bằng tình yêu thương và hạnh phúc đong đầy anh nhé!~</p>
          </div>
        </div>
        <div className='flex flex-row mt-10'>
          <div className='flex flex-col text-black items-center w-full px-3'>
            <p className='uppercase'>Chú rể</p>
            <p className='font-bold'>Nguyễn Tuấn Sơn</p>
            <p className='text-justify pt-3'>Hạnh phúc nhất trên đời không phải là việc gặp được người tuyệt vời nhất ở những tháng ngày đẹp nhất. Mà là một người sẽ từ từ nhìn mình già đi, đúng người, đúng thời điểm, nắm tay nhau cùng đi. Anh rất hạnh phúc vì gặp được em, cùng anh về nhà em nhé!~</p>
          </div>
          <div className="h-[300px] bg-black w-[320px]">
            ảnh 2
          </div>
        </div>
        <div className='p-4 flex flex-col gap-3 items-center justify-center'>
          <hr class="rounded w-[20%]"></hr>
          <p>Thân mời</p>
          <p>Đến dự lễ cưới của chúng mình</p>
        </div>
        <div className='w-full bg-black h-[160px]'>
          ảnh 3
        </div>
        <div className='mt-5 flex justify-center'>
          Tháng 4
        </div>
        <div className='px-3 mt-2'>
          <table className='w-full'>
            <tr>
              <th><div className='flex justify-center p-2'>Mon</div></th>
              <th><div className='flex justify-center p-2'>Tue</div></th>
              <th><div className='flex justify-center p-2'>Wed</div></th>
              <th><div className='flex justify-center p-2'>Thur</div></th>
              <th><div className='flex justify-center p-2'>Fri</div></th>
              <th><div className='flex justify-center p-2'>Sat</div></th>
              <th><div className='flex justify-center p-2'>Sun</div></th>
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
              <td><div className='flex justify-center p-2 font-bold'>20</div></td>
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
        <div className='px-20 py-6'>
          <p className='uppercase text-center'>Tiệc mừng lễ thành hôn được tổ chức vào lúc 18 giờ 00 phút</p>
        </div>
        <div className='px-10 flex flex-row '>
          <div className='flex-1 flex justify-center flex-col items-center'>
            <p className='uppercase'>Tháng</p>
            <p className=''>04</p>
          </div>
          <div className='flex-1 flex justify-center middle-date flex-col items-center relative'>
            <p className='uppercase'>Thứ 7</p>
            <p className='text-white'>20</p>
            <p className='absolute text-[30px] top-[20px]'>20</p>
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
        <div className='mt-8 flex items-center justify-center'>
          <span className='uppercase'>Chỉ đường</span>
        </div>
        <div className='w-full bg-black h-[160px] mt-6'>
          ảnh 3
        </div>
        <div className='mt-2 flex flex-col gap-3 justify-center items-center'>
          <p className='uppercase'>Timeline</p>
          <Timeline
            mode="alternate"
            items={[
              {
                color: 'black',
                children: <div className='flex flex-col justify-center items-center w-[100px]'>
                  <p>icon</p>
                  <p>16:30</p>
                  <p>Đón khách</p>
                </div>,
              },
              {
                color: 'black',
                children: <div className='flex flex-col justify-center items-center w-[100px] mr-[150px]'>
                  <p>icon</p>
                  <p>17:30</p>
                  <p>Lễ thành hôn</p>
                </div>,
              },
              {
                color: 'black',
                children: <div className='flex flex-col justify-center items-center w-[100px]'>
                  <p>icon</p>
                  <p>18:00</p>
                  <p>Khai tiệc</p>
                </div>,
              },
              {
                color: 'black',
                children: <div className='flex flex-col justify-center items-center w-[100px]'>
                  <p>icon</p>
                  <p>20:00</p>
                  <p>Kết thúc tiệc</p>
                </div>,
              },
            ]}
          />
        </div>
        <div className='w-full bg-black h-[300px] mt-2'>
          ảnh 3
        </div>
        <div className='flex justify-center p-5'>
          <p className='text-center'>Sự hiện diện của bạn là niềm vinh hạnh cho gia đình chúng mình!~</p>
        </div>
        <p className='text-center'>Album hình cưới</p>
        <div className="h-[300px] bg-black w-[320px]" id='testimage'>
            ảnh 2
        </div>
      </div>
    </div>
  );
}

export default App;
