import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-[#15132B] px-6">
      <div className="relative flex items-center ">
        <input
          type="text"
          placeholder="Search Here"
          className="rounded-2xl pl-14 pr-4 py-2 outline-none w-72 bg-[#211A75]"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
          viewBox="0 0 28 28"
          fill="currentColor"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M15.7544 24.4961C8.99144 24.4961 3.50889 19.0136 3.50889 12.2505C3.50889 5.48744 8.99138 0.00500488 15.7544 0.00500488C22.5175 0.00500488 28 5.4875 28 12.2506C28 19.0136 22.5175 24.4961 15.7544 24.4961ZM15.7544 3.50375C10.9237 3.50375 7.00763 7.41981 7.00763 12.2506C7.00763 17.0813 10.9237 20.9974 15.7544 20.9974C20.5852 20.9974 24.5013 17.0813 24.5013 12.2506C24.5013 7.41981 20.5851 3.50375 15.7544 3.50375Z"
              fill="#7879F1"
            />
            <path
              d="M1.75951 27.9948C1.29451 27.9975 0.847592 27.815 0.51747 27.4875C-0.168521 26.8071 -0.173043 25.6995 0.50734 25.0135C0.510717 25.0102 0.514093 25.0068 0.51747 25.0034L7.09507 18.4258C7.80518 17.7398 8.93694 17.7594 9.62293 18.4695C10.3089 19.1797 10.2893 20.3114 9.57922 20.9974L3.00156 27.4875C2.67143 27.815 2.22452 27.9975 1.75951 27.9948Z"
              fill="#7879F1"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex space-x-2 items-center">
        <p className="text-[#6418C3] hidden sm:block">Other Menus</p>
        <div className="">
          <svg
            width="72"
            height="72"
            viewBox="0 0 82 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.4707 48.1862L38.3333 44.9802V40.6667C38.3333 38.1914 37.35 35.8174 35.5997 34.067C33.8493 32.3167 31.4753 31.3334 29 31.3334C26.5246 31.3334 24.1507 32.3167 22.4003 34.067C20.65 35.8174 19.6667 38.1914 19.6667 40.6667V44.9802L17.5293 48.1862C17.4126 48.362 17.3456 48.5661 17.3356 48.7769C17.3256 48.9877 17.3729 49.1972 17.4724 49.3833C17.572 49.5693 17.7201 49.7249 17.9011 49.8335C18.082 49.9421 18.289 49.9997 18.5 50H39.5C39.711 49.9997 39.918 49.9421 40.0989 49.8335C40.2798 49.7249 40.428 49.5693 40.5275 49.3833C40.6271 49.1972 40.6744 48.9877 40.6644 48.7769C40.6544 48.5661 40.5874 48.362 40.4707 48.1862Z"
              fill="#7879F1"
            />
            <path
              d="M29 54.6666C30.0344 54.6675 31.0397 54.324 31.8572 53.6903C32.6748 53.0565 33.258 52.1686 33.515 51.1666H24.485C24.742 52.1686 25.3252 53.0565 26.1428 53.6903C26.9603 54.324 27.9656 54.6675 29 54.6666Z"
              fill="#7879F1"
            />
            <g filter="url(#filter0_d_2983_58)">
              <rect
                x="28"
                y="14"
                width="26"
                height="26"
                rx="13"
                fill="#5ECFFF"
              />
            </g>
            <path
              d="M36.962 32V24.832L34.778 26.092L34.134 24.706L37.2 22.76H38.866V32H36.962ZM41.6053 32V30.488L43.7193 28.318C44.1206 27.9073 44.466 27.548 44.7553 27.24C45.0446 26.9227 45.264 26.624 45.4133 26.344C45.572 26.064 45.6513 25.7653 45.6513 25.448C45.6513 24.9813 45.5206 24.6687 45.2593 24.51C44.998 24.342 44.578 24.258 43.9993 24.258C43.766 24.258 43.5093 24.272 43.2293 24.3C42.9493 24.328 42.6786 24.3607 42.4173 24.398C42.1653 24.4353 41.946 24.4727 41.7593 24.51L41.6613 23.026C41.8666 22.97 42.1186 22.9093 42.4173 22.844C42.7253 22.7787 43.0566 22.7227 43.4113 22.676C43.7753 22.62 44.13 22.592 44.4753 22.592C45.4833 22.592 46.2533 22.8067 46.7853 23.236C47.3173 23.656 47.5833 24.3093 47.5833 25.196C47.5833 25.6813 47.5133 26.1107 47.3733 26.484C47.2426 26.8573 47.0326 27.2167 46.7433 27.562C46.4633 27.898 46.09 28.2667 45.6233 28.668L43.7753 30.432H47.7093V32H41.6053Z"
              fill="#0D0B21"
            />
            <defs>
              <filter
                id="filter0_d_2983_58"
                x="0"
                y="0"
                width="82"
                height="82"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="14" />
                <feGaussianBlur stdDeviation="14" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.366667 0 0 0 0 0.810339 0 0 0 0 1 0 0 0 0.12 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2983_58"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2983_58"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="">
          <svg
            width="72"
            height="72"
            viewBox="0 0 81 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2983_44)">
              <path
                d="M21.5452 29C20.146 29 18.9998 30.1463 18.9998 31.5455V48.0909C18.9998 49.4901 20.146 50.6364 21.5452 50.6364H23.0156C22.9298 50.1123 22.8373 49.538 22.8242 49.0368C22.8242 46.7169 24.155 44.6365 26.1787 43.6314C25.6743 43.0256 25.3696 42.248 25.3696 41.4029C25.3696 39.4805 26.9439 37.9091 28.8671 37.9091C30.7904 37.9091 32.3634 39.4805 32.3634 41.4029C32.3634 42.2483 32.0587 43.0255 31.5543 43.6314C33.5787 44.6362 34.9088 46.7165 34.9088 49.0368C34.8779 49.638 34.8276 50.0623 34.6876 50.6364H44.4543C45.8535 50.6364 46.9998 49.4901 46.9998 48.0909V31.5455C46.9998 30.1463 45.8535 29 44.4543 29H21.5452ZM21.5452 30.2727H44.4543C45.1704 30.2727 45.727 30.8294 45.727 31.5455V34.0909H20.2725V31.5455C20.2725 30.8294 20.8291 30.2727 21.5452 30.2727ZM37.7638 37.9886L43.4911 41.1705C43.9287 41.4127 43.9287 42.0419 43.4911 42.2841L37.7638 45.4659C37.3393 45.7021 36.8174 45.3948 36.8179 44.9091V38.5455C36.8021 38.0154 37.3461 37.758 37.7638 37.9886ZM28.8671 39.1818C27.631 39.1818 26.6423 40.169 26.6423 41.4029C26.6423 42.6367 27.631 43.6239 28.8671 43.6239C30.1032 43.6239 31.0907 42.6367 31.0907 41.4029C31.0907 40.169 30.1032 39.1818 28.8671 39.1818ZM27.3222 44.53C25.3999 45.1859 24.0969 46.9883 24.0969 49.0368C24.1111 49.55 24.2231 50.1035 24.3032 50.6364H33.3962C33.544 50.0322 33.6071 49.5652 33.6361 49.0368C33.6361 46.9889 32.3339 45.1875 30.412 44.5312C29.9451 44.7633 29.4216 44.8967 28.8671 44.8967C28.3124 44.8967 27.7894 44.7622 27.3222 44.53Z"
                fill="#464366"
              />
              <path
                d="M25.3634 51.9091C24.1849 51.9091 23.1877 52.7249 22.9025 53.8182H18.9998V55.0909H22.9025C23.1877 56.1842 24.1849 57 25.3634 57C26.5422 57 27.5419 56.1847 27.8268 55.0909H46.9998V53.8182H27.8268C27.5419 52.7244 26.5422 51.9091 25.3634 51.9091Z"
                fill="#464366"
              />
              <path
                d="M43.1816 31.5455V32.8182H44.4543V31.5455H43.1816Z"
                fill="#464366"
              />
              <path
                d="M40.6361 31.5455V32.8182H41.9089V31.5455H40.6361Z"
                fill="#464366"
              />
              <path
                d="M38.0907 31.5455V32.8182H39.3634V31.5455H38.0907Z"
                fill="#464366"
              />
              <path
                d="M35.5452 31.5455V32.8182H36.8179V31.5455H35.5452Z"
                fill="#464366"
              />
            </g>
            <g filter="url(#filter0_d_2983_44)">
              <rect
                x="28.2468"
                y="14"
                width="24.7532"
                height="24.7532"
                rx="12.3766"
                fill="#5ECFFF"
              />
            </g>
            <path
              d="M40.9478 32.154C40.5931 32.154 40.2104 32.126 39.7998 32.07C39.3891 32.0233 38.9924 31.9627 38.6098 31.888C38.2271 31.8133 37.9004 31.748 37.6298 31.692L37.7978 30.264C38.0498 30.3013 38.3484 30.348 38.6938 30.404C39.0391 30.4507 39.3938 30.488 39.7578 30.516C40.1218 30.544 40.4531 30.558 40.7518 30.558C41.2278 30.558 41.6058 30.4367 41.8858 30.194C42.1658 29.942 42.3058 29.578 42.3058 29.102C42.3058 28.7753 42.2451 28.5187 42.1238 28.332C42.0118 28.1453 41.8438 28.0147 41.6198 27.94C41.4051 27.856 41.1531 27.814 40.8638 27.814C40.6398 27.814 40.4158 27.8373 40.1918 27.884C39.9678 27.9213 39.7578 27.9727 39.5618 28.038C39.3658 28.094 39.2071 28.1547 39.0858 28.22L37.8258 28.024L38.0498 22.76H43.8318V24.454H39.5618L39.3798 26.512C39.5104 26.456 39.6738 26.4 39.8698 26.344C40.0658 26.2787 40.2758 26.2227 40.4998 26.176C40.7331 26.1293 40.9571 26.106 41.1718 26.106C41.8158 26.106 42.3618 26.1947 42.8098 26.372C43.2578 26.5493 43.5984 26.8433 43.8318 27.254C44.0744 27.6647 44.1958 28.2247 44.1958 28.934C44.1958 29.6713 44.0604 30.278 43.7898 30.754C43.5284 31.2207 43.1551 31.5707 42.6698 31.804C42.1938 32.0373 41.6198 32.154 40.9478 32.154Z"
              fill="#0D0B21"
            />
            <defs>
              <filter
                id="filter0_d_2983_44"
                x="0.246826"
                y="0"
                width="80.7532"
                height="80.7532"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="14" />
                <feGaussianBlur stdDeviation="14" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.366667 0 0 0 0 0.810339 0 0 0 0 1 0 0 0 0.12 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2983_44"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2983_44"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_2983_44">
                <rect
                  width="28"
                  height="28"
                  fill="white"
                  transform="translate(18.9998 29)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="">
          <svg
            width="72"
            height="72"
            viewBox="0 0 82 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.3334 38.3333V45.3333C38.3313 47.1892 37.5932 48.9685 36.2808 50.2808C34.9685 51.5931 33.1892 52.3313 31.3334 52.3333H24.3334C24.0239 52.3333 23.7272 52.4562 23.5084 52.675C23.2896 52.8938 23.1667 53.1905 23.1667 53.5C23.1667 53.8094 23.2896 54.1061 23.5084 54.3249C23.7272 54.5437 24.0239 54.6666 24.3334 54.6666H31.3334C33.8078 54.6638 36.1802 53.6795 37.9299 51.9298C39.6796 50.1801 40.6638 47.8078 40.6667 45.3333V38.3333C40.6667 38.0239 40.5438 37.7271 40.325 37.5083C40.1062 37.2895 39.8094 37.1666 39.5 37.1666C39.1906 37.1666 38.8939 37.2895 38.6751 37.5083C38.4563 37.7271 38.3334 38.0239 38.3334 38.3333Z"
              fill="#7879F1"
            />
            <path
              d="M31.3333 51.1667C32.8799 51.1649 34.3626 50.5497 35.4561 49.4562C36.5497 48.3626 37.1649 46.8799 37.1667 45.3334V37.1667C37.1649 35.6202 36.5497 34.1375 35.4561 33.0439C34.3626 31.9504 32.8799 31.3352 31.3333 31.3334H23.1667C21.6201 31.3352 20.1375 31.9504 19.0439 33.0439C17.9503 34.1375 17.3352 35.6202 17.3333 37.1667V45.3334C17.3352 46.8799 17.9503 48.3626 19.0439 49.4562C20.1375 50.5497 21.6201 51.1649 23.1667 51.1667H31.3333ZM24.1117 39.9832L25.603 42.0454L30.5408 37.4767C30.7681 37.2665 31.0695 37.1553 31.3788 37.1673C31.6881 37.1794 31.9799 37.3139 32.19 37.5411C32.4002 37.7683 32.5115 38.0697 32.4994 38.379C32.4873 38.6883 32.3529 38.9801 32.1256 39.1903L26.2218 44.652C26.1007 44.7641 25.9571 44.8491 25.8006 44.9016C25.6442 44.954 25.4783 44.9727 25.3141 44.9563C25.1499 44.94 24.991 44.889 24.848 44.8067C24.7049 44.7244 24.581 44.6127 24.4843 44.4789L22.2217 41.3503C22.0495 41.0993 21.9822 40.7909 22.0342 40.491C22.0862 40.1911 22.2533 39.9234 22.5 39.745C22.7466 39.5666 23.0532 39.4916 23.3543 39.5361C23.6554 39.5806 23.9272 39.7411 24.1117 39.9832Z"
              fill="#7879F1"
            />
            <g filter="url(#filter0_d_2983_37)">
              <rect
                x="28"
                y="14"
                width="26"
                height="26"
                rx="13"
                fill="#5ECFFF"
              />
            </g>
            <path
              d="M37.826 32V30.488L39.94 28.318C40.3413 27.9073 40.6867 27.548 40.976 27.24C41.2653 26.9227 41.4847 26.624 41.634 26.344C41.7927 26.064 41.872 25.7653 41.872 25.448C41.872 24.9813 41.7413 24.6687 41.48 24.51C41.2187 24.342 40.7987 24.258 40.22 24.258C39.9867 24.258 39.73 24.272 39.45 24.3C39.17 24.328 38.8993 24.3607 38.638 24.398C38.386 24.4353 38.1667 24.4727 37.98 24.51L37.882 23.026C38.0873 22.97 38.3393 22.9093 38.638 22.844C38.946 22.7787 39.2773 22.7227 39.632 22.676C39.996 22.62 40.3507 22.592 40.696 22.592C41.704 22.592 42.474 22.8067 43.006 23.236C43.538 23.656 43.804 24.3093 43.804 25.196C43.804 25.6813 43.734 26.1107 43.594 26.484C43.4633 26.8573 43.2533 27.2167 42.964 27.562C42.684 27.898 42.3107 28.2667 41.844 28.668L39.996 30.432H43.93V32H37.826Z"
              fill="#0D0B21"
            />
            <defs>
              <filter
                id="filter0_d_2983_37"
                x="0"
                y="0"
                width="82"
                height="82"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="14" />
                <feGaussianBlur stdDeviation="14" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.366667 0 0 0 0 0.810339 0 0 0 0 1 0 0 0 0.12 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2983_37"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2983_37"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="">
          <svg
            width="72"
            height="72"
            viewBox="0 0 88 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.3466 39.0083L33.775 37.2933C33.6947 37.0629 33.5451 36.8629 33.3466 36.7209C33.1482 36.5789 32.9107 36.5017 32.6666 36.5H26.8333C25.9059 36.5027 25.0172 36.8723 24.3614 37.5281C23.7056 38.1839 23.336 39.0726 23.3333 40V42.3333H31.0216L34.3466 39.0083Z"
              fill="#7879F1"
            />
            <path
              d="M43.1666 40H36.6566L32.3283 44.3283C32.1059 44.5433 31.8093 44.6644 31.5 44.6667H23.3333V54C23.336 54.9274 23.7056 55.8161 24.3614 56.4719C25.0172 57.1277 25.9059 57.4973 26.8333 57.5H43.1666C44.0941 57.4973 44.9827 57.1277 45.6385 56.4719C46.2943 55.8161 46.6639 54.9274 46.6666 54V43.5C46.6639 42.5726 46.2943 41.6839 45.6385 41.0281C44.9827 40.3723 44.0941 40.0027 43.1666 40Z"
              fill="#7879F1"
            />
            <g filter="url(#filter0_d_2983_30)">
              <rect
                x="31"
                y="17"
                width="26"
                height="26"
                rx="13"
                fill="#E328AF"
              />
              <rect
                x="29.5"
                y="15.5"
                width="29"
                height="29"
                rx="14.5"
                stroke="#15132B"
                strokeWidth="3"
              />
            </g>
            <path
              d="M42.98 31.71L42.84 25.438H44.856L44.73 31.71H42.98ZM42.882 35V32.942H44.828V35H42.882Z"
              fill="#0D0B21"
            />
            <defs>
              <filter
                id="filter0_d_2983_30"
                x="0"
                y="0"
                width="88"
                height="88"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="14" />
                <feGaussianBlur stdDeviation="14" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.366667 0 0 0 0 0.810339 0 0 0 0 1 0 0 0 0.12 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2983_30"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2983_30"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="flex items-center space-x-2 bg-[#211A75] text-gray-600 hover:text-gray-800 focus:outline-none  rounded-2xl px-3 py-2">
          {/* American Flag Icon (Replace with your SVG icon) */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2983_13)">
              <path
                d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
                fill="#F0F0F0"
              />
              <path
                d="M13.3913 14H28C28 12.7364 27.8316 11.5122 27.5177 10.3478H13.3913V14Z"
                fill="#D80027"
              />
              <path
                d="M13.3913 6.69571H25.9452C25.0882 5.29724 23.9924 4.06114 22.7148 3.04352H13.3913V6.69571Z"
                fill="#D80027"
              />
              <path
                d="M14 28.0001C17.2949 28.0001 20.3233 26.8613 22.7148 24.9567H5.28522C7.6767 26.8613 10.7051 28.0001 14 28.0001Z"
                fill="#D80027"
              />
              <path
                d="M2.05484 21.3044H25.9452C26.6332 20.1817 27.1668 18.9545 27.5177 17.6522H0.4823C0.83323 18.9545 1.36682 20.1817 2.05484 21.3044Z"
                fill="#D80027"
              />
              <path
                d="M6.48506 2.1863H7.76087L6.57415 3.04845L7.02745 4.44347L5.84079 3.58132L4.65412 4.44347L5.04569 3.23832C4.00083 4.10867 3.08503 5.12838 2.33034 6.26456H2.73913L1.98373 6.81335C1.86605 7.00968 1.75317 7.20912 1.645 7.41152L2.00572 8.52173L1.33273 8.03277C1.16545 8.3872 1.01243 8.74962 0.874891 9.11958L1.2723 10.3428H2.73913L1.55241 11.205L2.00572 12.6L0.819055 11.7379L0.108227 12.2543C0.0370781 12.8262 0 13.4088 0 14H14C14 6.26806 14 5.35653 14 0C11.2343 0 8.65621 0.802266 6.48506 2.1863ZM7.02745 12.6L5.84079 11.7379L4.65412 12.6L5.10743 11.205L3.92071 10.3428H5.38754L5.84079 8.94781L6.29404 10.3428H7.76087L6.57415 11.205L7.02745 12.6ZM6.57415 7.12671L7.02745 8.52173L5.84079 7.65959L4.65412 8.52173L5.10743 7.12671L3.92071 6.26456H5.38754L5.84079 4.86954L6.29404 6.26456H7.76087L6.57415 7.12671ZM12.0492 12.6L10.8625 11.7379L9.67586 12.6L10.1292 11.205L8.94244 10.3428H10.4093L10.8625 8.94781L11.3158 10.3428H12.7826L11.5959 11.205L12.0492 12.6ZM11.5959 7.12671L12.0492 8.52173L10.8625 7.65959L9.67586 8.52173L10.1292 7.12671L8.94244 6.26456H10.4093L10.8625 4.86954L11.3158 6.26456H12.7826L11.5959 7.12671ZM11.5959 3.04845L12.0492 4.44347L10.8625 3.58132L9.67586 4.44347L10.1292 3.04845L8.94244 2.1863H10.4093L10.8625 0.791273L11.3158 2.1863H12.7826L11.5959 3.04845Z"
                fill="#0052B4"
              />
            </g>
            <defs>
              <clipPath id="clip0_2983_13">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>

          {/* English Text */}
          <span className="text-sm text-white">English</span>

          {/* Dropdown Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 14a1 1 0 0 1-.707-.293l-3-3a1 1 0 1 1 1.414-1.414L10 11.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-.707.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className="flex items-center space-x-2 bg-[#15132B] text-gray-600 hover:text-gray-800 focus:outline-none  rounded-2xl px-3 py-2">
          <svg
            width="47"
            height="47"
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="57" height="57" rx="14" fill="#C4C4C4" />
          </svg>

          {/* English Text */}
          <span className="text-sm text-white">Instructor Day</span>

          {/* Dropdown Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 14a1 1 0 0 1-.707-.293l-3-3a1 1 0 1 1 1.414-1.414L10 11.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-.707.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
