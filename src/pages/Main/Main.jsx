import React, { useState} from 'react';
// import axios from "axios";
import "./Main.css";
import profile from "./images/userImg.png";
import ChatBot from "./ChatBot/ChatBot.jsx";
import submit from "./images/submit.png";
import proj1 from "./images/project1.png";
import proj2 from "./images/project2.png";
import proj3 from "./images/project3.png";
import { useNavigate } from 'react-router-dom';


export default function Main() {

    const navigate = useNavigate()

    const hashtag = [
        { content: "#자녀나이" },
        { content: "#문화" },
        { content: "#교육" },
        { content: "#봉사" },
        { content: "#장소" },
        { content: "#행사" },
        { content: "#취미" },
        { content: "#나들이" },
    ];

    // const [mainMissionPost, setmainMissionPost] = useState([]); 
    const [userInput, setUserInput] = useState("");
    const [isChatVisible, setIsChatVisible] = useState(false); // 슬라이드 상태
    const [isChatBotVisible, setIsChatBotVisible] = useState(false); // 챗봇 보이기 상태

    const handleInputChange = (e) => setUserInput(e.target.value);

    const handleSendMessage = () => {
        if (userInput.trim()) {
            // main-chat-container 숨기기
            setIsChatVisible(true);

            // 일정 시간 후에 챗봇을 보이게 하도록 설정 (애니메이션이 끝날 때까지 대기)
            setTimeout(() => {
                setIsChatBotVisible(true);
            }, 400); // 500ms 후에 챗봇이 보이도록 설정
        }
    };

    const [slideDirection, setSlideDirection] = useState(0); // 슬라이드 방향 초기화 (0: 정지, 1: 오른쪽, -1: 왼쪽)

    const handleMouseMove = (e) => {
        // 화면의 중간을 기준으로 왼쪽 또는 오른쪽으로 마우스가 움직이는지 판단
        const middleX = window.innerWidth / 2;
        if (e.clientX > middleX) {
            setSlideDirection(1); // 오른쪽으로 슬라이드
        } else {
            setSlideDirection(-1); // 왼쪽으로 슬라이드
        }
    };

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //     const accessToken = localStorage.getItem('accessToken');
    //     try {
    //         const response = await axios.get('http://44.193.101.200:80//api/auth/main',
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${accessToken}`, 
    //                 }
    //             });

    //         if (response.status===200) {
    //         setmainMissionPost(response.data); 
    //         console.log("Fetched posts:", response.data); 
    //         } else {
    //         console.error('Failed to fetch post:', response.data.message);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching posts:', error);
    //     }
    //     };
    //     fetchPosts();
    // }, []);

    return (
        <div className='main-container'>
            <div className='main-title-container'>
                <div className='main-title-contents'>
                    <div className='main-title-contents-nickname'>
                        <span>{localStorage.nickname}</span>님,
                        <br />안녕하세요!
                    </div>
                    <div className='main-title-contents-sub'>
                        가족구성원 등록 후<br />
                        프로젝트를 진행해 주세요
                    </div>
                </div>
                <div className='main-title-myImg'>
                    <img src={profile} alt="프로필 이미지" />
                </div>
            </div>

            {/* main-chat-container */}
            <div className={`main-chat-container ${isChatVisible ? "hidden" : ""}`}>
                <div className='main-chat-title'>
                    자녀와 함께 할 <br /><span>프로젝트</span> 추천해 줄게!!
                </div>
                <div className='main-chat-hashtag'>
                    {hashtag.map((tag, index) => (
                        <div key={index} className='main-chat-hashtag-contents'>
                            {tag.content}
                        </div>
                    ))}
                </div>
                <div className='main-chat-chatting'>
                    <input
                        type="text"
                        placeholder="키워드를 참고해서 질문해 보세요!"
                        value={userInput}
                        onChange={handleInputChange}
                    />
                    <div className='main-chat-chatting-submit' onClick={handleSendMessage}>
                        <img src={submit} alt="전송 버튼" />
                    </div>
                </div>
            </div>
            {/* ChatBot component */}
            <div className={`chatbot-container ${isChatBotVisible ? "visible" : ""}`}>
                {isChatBotVisible && <ChatBot initialMessage={userInput} />}
            </div>

            <div className='main-project-container' onMouseMove={handleMouseMove}>
                <div className='main-project-title'>이 달의 <span>도전 프로젝트</span></div>
                <div className={`main-project-contents slide-${slideDirection}`} onClick={() => navigate("/MissionMain")}>
                    <div className='main-project-1'>
                        <span>가족과 함께<br />떠나는 단풍놀이</span>
                        <div className='main-project-1-img'>
                            <img src={proj1} alt="" />
                        </div>
                    </div>
                    <div className='main-project-2'>
                        <span>우리 가족이<br />살아갈 환경 지키기</span>
                        <div className='main-project-2-img'>
                            <img src={proj2} alt="" />
                        </div>                    
                    </div>
                    <div className='main-project-3'>
                        <span>함께 배우는<br />역사 탐방</span>
                        <div className='main-project-3-img'>
                            <img src={proj3} alt="" />
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    );
}
