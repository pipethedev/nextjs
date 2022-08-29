import React from "react";
import { FaSpotify } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";
import useSWR from "swr";
import Socials from "../socials";

const Footer = () => {
  const [track, setTrack] = React.useState<any>(null);

  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`/api/track`, fetcher);

  React.useEffect(() => {
    setTrack(data);
  }, [data]);

  return (
    <footer className="p-5 border-t border-black dark:border-white space-y-4">
      {track ? (
        <>
          {track.is_playing ? (
            <Link href={track.item.external_urls.spotify} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <div className="flex items-center space-x-2 text-green-500">
                  <span>
                    <FaSpotify />
                  </span>
                  <span>
                    {track.item.name} - {track.item.artists[0].name}
                  </span>
                </div>
              </a>
            </Link>
          ) : (
            <div className="flex items-center space-x-2">
              <span>
                <FaSpotify />
              </span>
              <span>Not Playing – Spotify</span>
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center space-x-2">
          <span>
            <FaSpotify />
          </span>
          <span>{error ? "Failed" : "Loading"} – Spotify</span>
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Socials />
        </div>

        <Link href="https://brimble.io">
          <a target="_blank" className="flex items-center space-x-2">
            <h1>Powered By </h1>{" "}
            <svg
              width="80"
              height="24"
              viewBox="0 0 118 24"
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M27.3477 2.16992H29.493V9.29899C30.1879 8.4995 31.0635 7.86628 32.0517 7.44856C33.0167 7.0504 34.0553 6.84765 35.1039 6.85273C36.126 6.8436 37.1387 7.04194 38.0771 7.43499C38.9778 7.81288 39.7938 8.35763 40.4794 9.0387C41.5385 10.1178 42.2542 11.4704 42.5406 12.9343C42.8271 14.3981 42.6722 15.911 42.0945 17.2916C41.3465 19.0787 39.9033 20.5083 38.0771 21.2712C37.1576 21.6606 36.1643 21.8589 35.1611 21.8535C34.0933 21.8576 33.0365 21.6454 32.0581 21.2305C31.0673 20.8068 30.1914 20.1658 29.4994 19.3579V21.5488H27.3477V2.16992ZM35.011 8.85612C34.2731 8.8512 33.5425 8.99749 32.8669 9.28542C32.2115 9.56429 31.6188 9.96494 31.1221 10.4648C30.6207 10.9724 30.2187 11.5643 29.9356 12.2116C29.638 12.8866 29.4873 13.614 29.493 14.3482C29.4832 15.7985 30.0636 17.1939 31.1081 18.2316C31.6168 18.7334 32.2182 19.1381 32.8809 19.4245C33.5585 19.7143 34.2906 19.865 35.0312 19.8674C35.7717 19.8697 36.5048 19.7236 37.1844 19.4381C37.8342 19.1634 38.4223 18.7677 38.9152 18.2735C39.4091 17.7705 39.8016 17.1822 40.0725 16.5391C40.3621 15.8624 40.5091 15.1363 40.5048 14.4037C40.5102 12.9482 39.9362 11.5469 38.9025 10.4919C38.4042 9.99094 37.8126 9.58616 37.159 9.29899C36.4845 9.0023 35.7516 8.85119 35.011 8.85612Z" />
              <path d="M51.2822 9.14536C50.5647 9.1365 49.8533 9.27393 49.194 9.54875C48.5785 9.80759 48.0238 10.1854 47.5637 10.659C47.0997 11.1419 46.7358 11.7069 46.4917 12.3232C46.2336 12.9736 46.1042 13.6654 46.1101 14.3623V21.6012H43.9609V7.20365H46.1063V9.39578C47.4594 7.82416 49.0402 7.03711 51.2695 7.03711L51.2822 9.14536Z" />
              <path d="M53.6562 2.06341C53.8289 2.06341 53.9999 2.09641 54.1594 2.16051C54.3189 2.22461 54.4639 2.31857 54.586 2.43702C54.7081 2.55546 54.805 2.69608 54.871 2.85084C54.9371 3.0056 54.9711 3.17146 54.9711 3.33897C54.9711 3.50648 54.9371 3.67235 54.871 3.82711C54.805 3.98187 54.7081 4.12248 54.586 4.24093C54.4639 4.35938 54.3189 4.45333 54.1594 4.51744C53.9999 4.58154 53.8289 4.61453 53.6562 4.61453C53.4839 4.62108 53.312 4.59239 53.1519 4.53033C52.9917 4.46828 52.8468 4.37423 52.7266 4.25432C52.4963 4.00173 52.3691 3.67617 52.3691 3.33897C52.3691 3.00177 52.4963 2.67621 52.7266 2.42363C52.8468 2.30371 52.9917 2.20967 53.1519 2.14761C53.312 2.08555 53.4839 2.05687 53.6562 2.06341ZM54.7486 7.16688V21.5916H52.5981V7.16688H54.7486Z" />
              <path d="M79.3054 12.7183V21.6004H77.1893V12.9959C77.1893 11.7203 76.8845 10.7264 76.2749 10.0142C75.6653 9.30203 74.8175 8.94593 73.7315 8.94593C73.147 8.94457 72.5682 9.05787 72.0299 9.279C70.962 9.70916 70.103 10.5177 69.6277 11.5402C69.3888 12.0494 69.2668 12.603 69.2703 13.1624V21.5954H67.1529V12.8849C67.1601 12.3403 67.0742 11.7984 66.8986 11.2812C66.7419 10.8271 66.4937 10.4078 66.1686 10.0475C65.8504 9.70347 65.4602 9.42925 65.024 9.24323C64.5599 9.0463 64.058 8.94708 63.5514 8.95209C62.9743 8.94928 62.4034 9.06753 61.8778 9.29874C61.3594 9.52623 60.8929 9.85166 60.5056 10.256C60.113 10.6682 59.7999 11.1453 59.5811 11.6648C59.3503 12.2103 59.2336 12.7948 59.2377 13.3845V21.5954H57.1152V7.17075H59.2314V8.89041C60.3759 7.55893 61.8727 6.89319 63.7218 6.89319C64.8079 6.89319 65.7404 7.12881 66.5196 7.60005C67.2987 8.07129 67.9659 8.80653 68.5213 9.80576C69.0545 8.92 69.8061 8.17651 70.7086 7.64199C71.5968 7.13724 72.6106 6.87826 73.6399 6.89319C74.4201 6.88544 75.1938 7.03193 75.9138 7.32372C76.5889 7.59852 77.1959 8.00983 77.6942 8.5302C78.2028 9.06903 78.6008 9.69707 78.8667 10.3806C79.1621 11.1265 79.3109 11.9194 79.3054 12.7183Z" />
              <path d="M81.3359 2.16992H83.48V9.29899C84.1753 8.49945 85.0514 7.86623 86.04 7.44857C87.003 7.05337 88.0389 6.85273 89.0845 6.8589C90.107 6.84975 91.1202 7.04808 92.059 7.44116C92.9597 7.81905 93.7757 8.3638 94.4613 9.04487C95.5204 10.124 96.2361 11.4766 96.5226 12.9404C96.809 14.4043 96.6541 15.9172 96.0764 17.2978C95.3284 19.0849 93.8853 20.5145 92.059 21.2774C91.1391 21.6667 90.1454 21.8651 89.1417 21.8597C88.0744 21.8636 87.018 21.6515 86.04 21.2367C85.0487 20.8132 84.1724 20.1721 83.48 19.3641V21.555H81.3359V2.16992ZM88.9993 8.85612C88.261 8.85121 87.5299 8.9975 86.8539 9.28542C86.1991 9.56463 85.6068 9.96525 85.1104 10.4648C84.609 10.9724 84.2069 11.5643 83.9239 12.2116C83.6259 12.8865 83.4748 13.6139 83.48 14.3482C83.4699 15.7988 84.0508 17.1945 85.0964 18.2316C85.6051 18.7334 86.2064 19.1381 86.8692 19.4245C87.5468 19.7143 88.2789 19.8651 89.0195 19.8674C89.76 19.8697 90.4931 19.7236 91.1727 19.4381C91.8221 19.1634 92.4097 18.7677 92.9022 18.2736C93.3965 17.7706 93.7895 17.1823 94.0607 16.5391C94.3491 15.8622 94.4948 15.1361 94.4893 14.4037C94.4959 12.9482 93.9222 11.5466 92.8882 10.4919C92.3898 9.99063 91.7977 9.58582 91.1434 9.29899C90.4702 9.00264 89.7386 8.85154 88.9993 8.85612Z" />
              <path d="M100.466 2.125V21.5693H98.3203V2.125H100.466Z" />
              <path d="M114.136 17.6589L115.566 19.0455C114.913 19.9365 114.038 20.6522 113.022 21.1254C111.953 21.6295 110.778 21.8859 109.589 21.8742C108.566 21.8797 107.554 21.6816 106.614 21.2919C105.217 20.7176 104.026 19.7553 103.192 18.526C102.357 17.2968 101.916 15.8555 101.924 14.3837C101.917 13.3817 102.126 12.3895 102.54 11.4711C102.933 10.5873 103.493 9.78304 104.193 9.10011C104.894 8.42295 105.723 7.88198 106.633 7.50627C107.568 7.11586 108.576 6.91761 109.594 6.92401C110.669 6.91673 111.733 7.13319 112.715 7.55881C113.696 7.98442 114.572 8.60929 115.283 9.39124C115.985 10.1766 116.516 11.0919 116.843 12.0818C117.197 13.1461 117.327 14.2688 117.224 15.3829H104.24C104.332 16.0061 104.54 16.6079 104.853 17.1593C105.158 17.7037 105.565 18.1881 106.053 18.5878C106.541 18.9855 107.091 19.3038 107.684 19.5303C108.291 19.7634 108.938 19.8811 109.591 19.877C110.507 19.8845 111.411 19.6802 112.229 19.2811C113.003 18.9165 113.662 18.3561 114.136 17.6589ZM104.185 13.3869H115.027C114.919 12.7595 114.691 12.1573 114.354 11.6117C114.023 11.0791 113.606 10.6013 113.119 10.1968C112.637 9.79202 112.086 9.47258 111.49 9.25307C110.882 9.03037 110.238 8.91789 109.589 8.92123C108.329 8.92035 107.11 9.35809 106.155 10.1548C105.153 10.996 104.461 12.1305 104.183 13.3869H104.185Z" />
              <path d="M13.8779 9.34587H8.94741C8.86309 9.34587 8.78222 9.31338 8.7226 9.25554C8.66298 9.19771 8.62948 9.11926 8.62948 9.03747C8.62948 8.95568 8.66298 8.87723 8.7226 8.8194C8.78222 8.76156 8.86309 8.72907 8.94741 8.72907H11.66C12.8533 8.72907 13.9977 8.26923 14.8415 7.45072C15.6853 6.63222 16.1593 5.52208 16.1593 4.36453C16.1593 3.20699 15.6853 2.09685 14.8415 1.27834C13.9977 0.459834 12.8533 0 11.66 0H6.59601V4.11534C5.62863 4.55077 4.80967 5.2453 4.23559 6.11712C3.66151 6.98894 3.35622 8.00174 3.35567 9.03624C3.35431 9.51839 3.42019 9.99851 3.55152 10.4635C2.16029 11.3061 1.08975 12.5653 0.501796 14.0505C-0.0861546 15.5358 -0.159535 17.1664 0.292753 18.6957C0.745041 20.225 1.6984 21.5699 3.00864 22.5269C4.31888 23.4839 5.91474 24.001 7.55488 24H13.8779C15.8813 24 17.8027 23.228 19.2193 21.8538C20.636 20.4796 21.4319 18.6157 21.4319 16.6723C21.4319 14.7289 20.636 12.8651 19.2193 11.4909C17.8027 10.1167 15.8813 9.34587 13.8779 9.34587ZM13.8779 22.2988H7.55488C6.16256 22.2997 4.81646 21.8143 3.76283 20.9313C2.7092 20.0484 2.01847 18.8271 1.81701 17.4907C1.61555 16.1543 1.91681 14.7922 2.6657 13.6536C3.41458 12.515 4.56102 11.676 5.89529 11.2901C5.46343 10.7388 5.19889 10.0815 5.13148 9.39218C5.06408 8.7029 5.19649 8.00905 5.51379 7.38885C5.83109 6.76865 6.32066 6.24675 6.92733 5.88197C7.534 5.51719 8.23365 5.32404 8.94741 5.32429H11.66C11.9207 5.32429 12.1707 5.22382 12.3551 5.04499C12.5395 4.86616 12.643 4.62361 12.643 4.3707C12.643 4.11779 12.5395 3.87525 12.3551 3.69642C12.1707 3.51758 11.9207 3.41712 11.66 3.41712H8.35352V1.70609H11.66C12.0249 1.69847 12.3878 1.76161 12.7272 1.89181C13.0667 2.02202 13.3759 2.21666 13.6368 2.46433C13.8977 2.712 14.105 3.00771 14.2465 3.33412C14.388 3.66053 14.4608 4.01106 14.4608 4.36515C14.4608 4.71924 14.388 5.06977 14.2465 5.39618C14.105 5.72259 13.8977 6.0183 13.6368 6.26597C13.3759 6.51364 13.0667 6.70829 12.7272 6.83849C12.3878 6.96869 12.0249 7.03183 11.66 7.02421H8.94741C8.67062 7.01756 8.39526 7.0647 8.13754 7.16286C7.87982 7.26102 7.64494 7.4082 7.44676 7.59575C7.24857 7.7833 7.09107 8.00742 6.98353 8.25492C6.876 8.50241 6.8206 8.76827 6.8206 9.03685C6.8206 9.30543 6.876 9.5713 6.98353 9.81879C7.09107 10.0663 7.24857 10.2904 7.44676 10.478C7.64494 10.6655 7.87982 10.8127 8.13754 10.9108C8.39526 11.009 8.67062 11.0561 8.94741 11.0495H13.8779C15.4001 11.0714 16.8524 11.6733 17.921 12.7253C18.9895 13.7773 19.5885 15.1949 19.5885 16.6717C19.5885 18.1485 18.9895 19.5661 17.921 20.6181C16.8524 21.6701 15.4001 22.272 13.8779 22.2939V22.2988ZM13.8779 12.7605H7.55488C7.0187 12.7513 6.48599 12.8458 5.98785 13.0384C5.48972 13.2311 5.03614 13.5181 4.65359 13.8826C4.27104 14.2472 3.96719 14.682 3.75977 15.1617C3.55235 15.6414 3.44553 16.1564 3.44553 16.6766C3.44553 17.1968 3.55235 17.7118 3.75977 18.1915C3.96719 18.6713 4.27104 19.1061 4.65359 19.4707C5.03614 19.8352 5.48972 20.1222 5.98785 20.3149C6.48599 20.5075 7.0187 20.602 7.55488 20.5928H13.8779C14.414 20.602 14.9467 20.5075 15.4449 20.3149C15.943 20.1222 16.3966 19.8352 16.7792 19.4707C17.1617 19.1061 17.4656 18.6713 17.673 18.1915C17.8804 17.7118 17.9872 17.1968 17.9872 16.6766C17.9872 16.1564 17.8804 15.6414 17.673 15.1617C17.4656 14.682 17.1617 14.2472 16.7792 13.8826C16.3966 13.5181 15.943 13.2311 15.4449 13.0384C14.9467 12.8458 14.414 12.7513 13.8779 12.7605ZM13.8779 18.8879H7.55488C6.95047 18.8879 6.37082 18.655 5.94344 18.2404C5.51606 17.8258 5.27597 17.2636 5.27597 16.6773C5.27597 16.091 5.51606 15.5287 5.94344 15.1141C6.37082 14.6995 6.95047 14.4666 7.55488 14.4666H13.8779C14.4823 14.4666 15.0619 14.6995 15.4893 15.1141C15.9167 15.5287 16.1568 16.091 16.1568 16.6773C16.1568 17.2636 15.9167 17.8258 15.4893 18.2404C15.0619 18.655 14.4823 18.8879 13.8779 18.8879Z" />
            </svg>
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
