<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> <!-- 한글 문자셋을 UTF-8로 설정 -->
<title>PHP 프로그래밍2</title>
<link rel="stylesheet" type="text/css" href="./css/common.css">
<link rel="stylesheet" type="text/css" href="./css/main.css">
<link rel="stylesheet" type="text/css" href="./css/swiper.min.css">
<script src="https://kit.fontawesome.com/b51af6ee40.js" crossorigin="anonymous"></script>

<script src="./js/lib/jquery-1.7.2.min.js"></script>
<script src="./js/lib/jquery.easing.1.3.min.js"></script>

<script src="./js/lib/swiper.min.js"></script>
<script src="./js/section.js"></script>
<script src="./js/header.js"></script>



</head>
<body> 
	<header>
	<div id="main_top_of_top">
            <!--너비 100% 높이80px -->
            <div class="maintop_bannerWrap">
                <a class="top_banner" href="#none"><img src="./img/top_banner.jpg" alt="top_banner"></a>
                <a class="button" href="#none"><i class="fa-solid fa-xmark"></i></a>
            </div>
    </div>

		<?php include "./header.php";?> <!-- 메인 페이지의 상단 헤더 파일 불러오기. include는 파일을 현재 위치에 삽입하라는 의미-->

		<div id="navWrap">		<!-- 너비 100% 높이 68 보더 위아래 1px -->	
			<nav class="nav">	<!-- 너비 1440px 높이 70px 마진 0 오토 -->
				<div class="trigger">			<!-- 너비 70px 높이 70px fl -->
					<div class="ani_box ani_click">
						<div><a href="#none" class="line1"></a></div>
						<div><a href="#none" class="line2"></a></div>
						<div><a href="#none" class="line3"></a></div>                  
					</div>
				</div>
				<ul class="nav_Box01">
					<li><a href="#none">MEDIA</a>
						<div class="sub_box">
							<ul class="dep2_1">
								<li class="dep2_tit">Media</li>
								<li><a href="#none">NEWS <i class="fa-solid fa-chevron-right"></i></a></li>
								<li><a href="board_list.php">NOTICE <i class="fa-solid fa-chevron-right"></i></a></li>
								<li><a href="#none">PHOTO <i class="fa-solid fa-chevron-right"></i></a></li>
							</ul>
							<ul class="dep2_2-1">
								<li>
									<dl>											
										<dt class="dep2_tit">NEWS</dt>
										<dd>	<!-- 282 158 -->
											<a href="#none"><img src="./img/newsImg01.jpg" width="280" alt="newsImg01">
												<span>FC서울, 2023시즌 다문화 축구교실 후원금 전달식 성료</span>
											</a>
										</dd>
										<dd>	<!-- 282 158 -->
											<a href="#none"><img src="./img/newsImg02.jpg" width="280" alt="newsImg02">
												<span>FC서울, 2023시즌 다문화 축구교실 참가자 모집</span>									
											</a>
										</dd>
									</dl>
								</li>
								<li>
									<dl>
										<dt class="dep2_tit">NOTICE</dt>
										<dd class="dd_padding">
											<a href="#none">
												<p class="p_tit">2023시즌 FC서울 홈경기 장내외 장식물 제작 및 설치철거 파트너사 선정 재공고</p>
												<p>[나라장터 공고 바로가기]</p>
												<p class="p_bottom"><i class="fa-solid fa-calendar-days"></i> 2022-12-29</p>
											</a>
										</dd>
										<dd class="dd_padding">
											<a href="#none">
												<p class="p_tit">2023시즌 FC서울 홈경기 장내외 마케팅 파트너사 선정 재공고</p>
												<p>[나라장터 공고 바로가기]</p>
												<p class="p_bottom"><i class="fa-solid fa-calendar-days"></i> 2022-12-29</p>
											</a>
										</dd>
									</dl>
								</li>
								<li>
									<dl>
										<dt class="dep2_tit">PHOTO</dt>
										<dd>	<!-- 282 158 -->
											<a href="#none"><img src="./img/newsImg03.jpg" width="280" alt="newsImg03">
												<span>[K리그1 15R 강원(H)] 팬과 선수들 하나가 되어 승리의 랄랄라 송을 부르고 있다.</span>
											</a>
										</dd>
										<dd>	<!-- 282 158 -->
											<a href="#none"><img src="./img/newsImg04.jpg" width="280" alt="newsImg04">
												<span>[K리그1 15R 강원(H)] 팬들앞에서 펼치는 승리의 세레머니 김주성</span>									
											</a>
										</dd>
									</dl>
								</li>
							</ul>
						</div>
						
					</li>

					<li><a href="#none">MATCHES</a>
						<div class="sub_box">
								<ul class="dep2_1">
									<li class="dep2_tit">MATCHES</li>
									<li><a href="#none">일정 / 결과 <i class="fa-solid fa-chevron-right"></i></a></li>
									<li><a href="#none">기록 / 순위 <i class="fa-solid fa-chevron-right"></i></a></li>
								</ul>
								<ul class="dep2_2-2">
									<li>
										<dl>											
											<dt class="dep2_tit">PREV MATCHES</dt>
											<dd class="dep2_2-2_Dd1"><img src="./img/seoul.png" width="65" alt="">
											<p>서울</p>
											</dd>
											<dd class="dep2_2-2_Dd2"><strong>1</strong> : 0</dd>
											<dd class="dep2_2-2_Dd3">
												<img src="./img/kang-won.png" width="65" alt="">
												<p>강원</p>
											</dd>
											<dd class="dep2_2-2_Dd4">2023.05.28(일) 16:30</dd>
											<dd class="dep2_2-2_Dd5">서울월드컵 경기장</dd>
											<dd class="dep2_2-2_Dd6"><a href="#none">경기결과</a></dd>
										</dl>
									</li>
									<li>
										<dl>
											<dt class="dep2_tit">NEXT MATCHES</dt>
											<dd class="dep2_2-2_Dd1 seoul"><img src="./img/seoul.png" width="65" alt="">
											<p>서울</p>
											</dd>
											<dd class="dep2_2-2_Dd3 Dae-gu">
												<img src="./img/Dae-gu.png" width="65" alt="">
												<p>대구</p>
											</dd>
											<dd class="dep2_2-2_Dd4"><strong>2023.06.04(일) 19:00</strong></dd>
											<dd class="dep2_2-2_Dd5">DGB대구은행파크</dd>
										</dl>
									</li>
									<li class="bg_matches">
										<dl>
											<dt class="dep2_tit">K LEAGUE 1</dt>
											<dd class="dep2_2-2_Dd1">현재순위 (15경기 기준)</dd>
											<dd class="dep2_2-2_Dd2"><strong>3</strong>위</dd>
											<dd class="dep2_2-2_Dd3"><strong>8</strong>승 <strong>3</strong>무 <strong>4</strong>패 <strong>27</strong>점</dd>
											<dd class="dep2_2-2_Dd4"><a href="#none">경기결과</a></dd>
										</dl>
									</li>
								</ul>
						</div>
					</li>

					<li><a href="#none">TICKETS</a>
						<div class="sub_box">
								<ul class="dep2_1">
									<li class="dep2_tit">TICKETS</li>
									<li><a href="#none">티켓 예매 <i class="fa-solid fa-chevron-right"></i></a></li>
									<li><a href="#none">시즌티켓 <i class="fa-solid fa-chevron-right"></i></a></li>
									<li><a href="#none">단체입장권 <i class="fa-solid fa-chevron-right"></i></a></li>
									<li><a href="#none">1865 스카이박스 <i class="fa-solid fa-chevron-right"></i></a></li>
								</ul>
								<ul class="dep2_2-3">
									<li class="bg_ticket">
										<a href="#none"><img src="./img/bg_ticket.jpg" alt="bg_ticket"></a>
									</li>
									
								</ul>
						</div>
					</li>

					<li><a href="#none">MEMVERSHIP</a>
						<div class="sub_box">
							<ul class="dep2_1">
								<li class="dep2_tit">MEMVERSHIP</li>
								<li><a href="#none">멤버십(GS&POINT)카드 <i class="fa-solid fa-chevron-right"></i></a></li>
								<li><a href="#none">멤버십(GS&POINT)카드 안내 <i class="fa-solid fa-chevron-right"></i></a></li>
							</ul>
							<ul class="dep2_2-4">
								<li>
									<a href="#none"><img src="./img/bg_membership01.jpg" alt="bg_membership01"></a>
								</li>
								<li>
								<a href="#none"><img src="./img/bg_membership02.jpg" alt="bg_membership02"></a>
								</li>
							</ul>
						</div>
					</li>

					<li><a href="#none">CLUB</a>
						<div class="sub_box">
									<ul class="dep2_1">
										<li class="dep2_tit">CLUB</li>
										<li><a href="#none">선수단 소개 <i class="fa-solid fa-chevron-right"></i></a></li>
										<li><a href="#none">유스팀 소개 <i class="fa-solid fa-chevron-right"></i></a></li>
										<li><a href="#none">구단 소개 <i class="fa-solid fa-chevron-right"></i></a></li>
										<li><a href="#none">스폰서 <i class="fa-solid fa-chevron-right"></i></a></li>
										<li><a href="#none">전자공고 <i class="fa-solid fa-chevron-right"></i></a></li>
									</ul>
									<ul class="dep2_2-5">
										<li class="bg_player">
											<div class="player_slideWrap">
												<ul class="player_prevWrap">
													<li class="player_prev"><a href="#none"><img src="./img/player_prev.png" alt="player_prev"></a></li>
												</ul>
												<ul class="player_memberWrap">
													<li class="Sang-Ho">
														<a href="#none">
															
															<p class="player_number">FW 7</p>
															<br>
															<p class="player_name"><strong>나상호</strong></p>
															<p class="player_line">__________</p>
															<br>
															<p class="player_record">득점 8</p>
															<p class="player_record">도움 2</p>
														</a>
													</li>

													<li class="Osmar">
														<a href="#none">
														
															<p class="player_number">MF 5</p>
															<br>
															<p class="player_name"><strong>오스마르</strong></p>
															<p class="player_line">__________</p>
															<br>
															<p class="player_record">득점 1</p>
															<p class="player_record">도움 0</p>
														</a>
													</li>
													<li class="Hyun-Soo">
														<a href="#none">
								
															<p class="player_number">DF 2</p>
															<br>
															<p class="player_name"><strong>황현수</strong></p>
															<p class="player_line">__________</p>
															<br>
															<p class="player_record">득점 0</p>
															<p class="player_record">도움 0</p>
														</a>
													</li>
													<li class="Jong-bum">
														<a href="#none">
												
															<p class="player_number">GK 1</p>
															<br>
															<p class="player_name"><strong>백종범</strong></p>
															<p class="player_line">__________</p>
															<br>
															<p class="player_record">실점 14</p>
														</a>
													</li>
												</ul>
												<ul class="player_nextWrap">
													<li class="player_next"><a href="#none"><img src="./img/player_next.png" alt="player_next"></a></li>
												</ul>
											</div>
										</li>
										<li class="bg_youth">
											<a href="#none"><img src="./img/bg_club02.jpg" alt="bg_club02"></a>
										</li>
										<li class="bg_staff">
											<a href="#none"><img src="./img/bg_club03.jpg" alt="bg_club03"></a>											
										</li>

										<li class="bg_academy">
											<a href="#none"><img src="./img/bg_club04.jpg" alt="bg_club04"></a>											
										</li>
									</ul>
						</div>
					</li>

					<li><a href="#none">FAN ZONE</a>
						<div class="sub_box">
									<ul class="dep2_1">
										<li class="dep2_tit">FAN ZONE</li>
										<li><a href="#none">공식 SNS <i class="fa-solid fa-chevron-right"></i></a></li>
										<li><a href="#none">소셜게시판 <i class="fa-solid fa-chevron-right"></i></a></li>
										<li><a href="#none">FAQ <i class="fa-solid fa-chevron-right"></i></a></li>
										<li><a href="#none">Q&A <i class="fa-solid fa-chevron-right"></i></a></li>
										<li><a href="#none">이벤트 ZONE <i class="fa-solid fa-chevron-right"></i></a></li>
										<li><a href="#none">FC서울 승리버스 <i class="fa-solid fa-chevron-right"></i></a></li>
									</ul>
									<ul class="dep2_2-6">
										<li>
											<a href="#none"><img src="./img/bg_FanZone01.jpg" alt="FanZone01"></a>
										</li>
										<li>
											<a href="#none"><img src="./img/bg_FanZone02.jpg" alt="FanZone02"></a>
										</li>
										<li>
											<a href="#none"><img src="./img/bg_FanZone03.jpg" alt="FanZone03"></a>
										</li>
									</ul>
						</div>
					</li>

					<li class="brown"><a href="#none"><i class="fa-solid fa-shop"></i> SHOP</a>
						<div class="sub_box">
							<ul class="dep2_1">
								<li class="dep2_tit">SHOP</li>
								<li><a href="#none">온라인 쇼핑몰 <i class="fa-solid fa-download"></i></a></li>
							</ul>
							<ul class="dep2_2-7">
								<li>
									<div class="shop_slideWrap">
										<h3 class="shop_tit">BEST ITEM</h3>
										<ul class="shop_prevWrap">
											<li class="shop_prev">
												<a href="#none"><img src="./img/player_prev.png" alt="shop_prev"></a>
											</li>
										</ul>

										<ul class="shop_mainWrap">
											<li class="shop_mainBox">
												<div class="mainBox1">
													<a href="#none">
														<img src="./img/shop_Img01.jpg" alt="shop_Img01">
														<p>23 개인 마킹</p>
														<p class="price">17,000 원</p>
													</a>
													<a href="#none">
														<img src="./img/shop_Img02.jpg" alt="shop_Img02">
														<p>22. FC서울 레인보우 LAMP</p>
														<p class="price">15,000 원</p>
													</a>

													<a href="#none">
														<img src="./img/shop_Img03.jpg" alt="shop_Img03">
														<p>22 FCSEOUL 타투 스티커</p>
														<p class="price">3,500 원</p>
													</a>

													<a href="#none">
														<img src="./img/shop_Img04.jpg" alt="shop_Img04">
														<p>22. FC서울 포토레인보우 (기성용)</p>
														<p class="price">10,000 원</p>
													</a>
												</div>

												<div class="mainBox2">
													<a href="#none">
														<img src="./img/shop_Img05.jpg" alt="shop_Img05">
														<p>23시즌 K리그 공식패치</p>
														<p class="price">13,000 원</p>
													</a>
													<a href="#none">
														<img src="./img/shop_Img06.jpg" alt="shop_Img06">
														<p>23 GS칼텍스 (골드,필드용)</p>
														<p class="price">6,000 원</p>
													</a>

													<a href="#none">
														<img src="./img/shop_Img07.jpg" alt="shop_Img07">
														<p>23 팔 스폰서 (홈)</p>
														<p class="price">20,000 원</p>
													</a>

													<a href="#none">
														<img src="./img/shop_Img08.jpg" alt="shop_Img08">
														<p>23 팔 스폰서 (어웨이)</p>
														<p class="price">20,000 원</p>
													</a>
												</div>

												<div class="mainBox3">
													<a href="#none">
														<img src="./img/shop_Img09.jpg" alt="shop_Img09">
														<p>23 등번호+이름 (골드,필드용)</p>
														<p class="price">17,000 원</p>
													</a>
													<a href="#none">
														<img src="./img/shop_Img10.jpg" alt="shop_Img10">
														<p>22. FC서울 WHITE 니트머플러</p>
														<p class="price">23,000 원</p>
													</a>

													<a href="#none">
														<img src="./img/shop_Img11.jpg" alt="shop_Img11">
														<p>23 신한플레이 (골드, 필드용)</p>
														<p class="price">6,000 원</p>
													</a>

													<a href="#none">
														<img src="./img/shop_Img12.jpg" alt="shop_Img12">
														<p>이달의 선수 패치</p>
														<p class="price">13,000 원</p>
													</a>
												</div>
												
											</li>
										</ul>

										<ul class="shop_nextWrap">
											<li class="shop_next">
												<a href="#none"><img src="./img/player_next.png" alt="shop_next"></a>
											</li>
										</ul>
									</div>
								</li>
								
							</ul>
						</div>
					</li>
					<div class="dep2_bg"></div>
				</ul>

				<div class="nav_Box02">
					<div class="nav_Box02Wrap">
						<div class="nav02">
							<ul class="nav02_1">
								<li><a href="#none">NEWS</a></li>
								<li><a href="#none">NOTICE</a></li>
								<li><a href="#none">PHOTO</a></li>
							</ul>
							<ul class="nav02_2">
								<li><a href="#none">일정 / 결과</a></li>
								<li><a href="#none">기록 / 순위</a></li>
							</ul>
							<ul class="nav02_3">
								<li><a href="#none">티켓 예매</a></li>
								<li><a href="#none">시즌티켓</a></li>
								<li><a href="#none">단체 입장권</a></li>
								<li><a href="#none">1865 스카이박스</a></li>
							</ul>
							<ul class="nav02_4">
								<li><a href="#none">멤버십(GS&POINT)카드</a></li>
								<li><a href="#none">멤버십(GS&POINT)카드 안내</a></li>
							</ul>
							<ul class="nav02_5">
								<li><a href="#none">선수단 소개</a></li>
								<li><a href="#none">유스팀 소개</a></li>
								<li><a href="#none">구단 소개</a></li>
								<li><a href="#none">스폰서</a></li>
								<li><a href="#none">전자공고</a></li>
							</ul>
							<ul class="nav02_6">
								<li><a href="#none">공식 SNS</a></li>
								<li><a href="#none">소셜게시판</a></li>
								<li><a href="#none">FAQ</a></li>
								<li><a href="#none">Q&A</a></li>
								<li><a href="#none">이벤트 ZONE</a></li>
								<li><a href="#none">FC서울 승리버스</a></li>
							</ul>
							<ul class="nav02_7">
								<li><a href="#none">온라인 쇼핑몰</a></li>
							</ul>
							<div class="nav02_bot">
								<a href="#none"><img src="./img/top_banner.jpg" alt="top_banner"></a>
							</div>
							
						</div>
					
					</div>
					<div id="nav02_toggleBg"></div>
					<div id="nav02_toggleBg2"></div>
					<div id="nav02_toggleBg3"></div>
					<div id="nav02_toggleBg4"></div>
				</div>
			</nav>
		</div>
	</header>
	
	<section>
		<div id="bannerWrap">	<!-- 너비 1920px 높이 650 px-->
			<div class="swiper-container swiper1">
				<div class="swiper-wrapper">
					<div class="swiper-slide"><img src="./img/bannerImg01.jpg" alt="bannerImg01"></div>
					<div class="swiper-slide"><img src="./img/bannerImg02.jpg" alt="bannerImg02"></div>
					<div class="swiper-slide"><img src="./img/bannerImg03.jpg" alt="bannerImg03"></div>

				</div>
				
				<!-- Add Pagination -->
				<div class="swiper-pagination swiper-pagination1"></div>
				
				<!-- Add Arrows -->
				<div class="swiper-button-next next1"><i class="fa-solid fa-chevron-right"></i></div>
				<div class="swiper-button-prev prev1"><i class="fa-solid fa-chevron-left"></i></div>
				
			</div>
		</div>
		<div id="section01">		<!-- 1920 491 -->
			<div id="section01Wrap">	<!-- 1440 491 -->
				<div class="section01_Rank">		<!-- 330px 330px -->
					<div class="section01_Rank_top cf">		<!-- 높이 60 -->
						<p class="ing_rank">현재 순위 <strong>3위</strong></p>
						<a href="#none" class="all_rank"> + </a>
					</div>
					<div class="section01_Rank_bot">
						<div class="tableWrap">
							<table>
								<thead>
									<th>순위</th>
									<th>팀명</th>
									<th>경기수</th>
									<th>승점</th>
									<th>승</th>
									<th>무</th>
									<th>패</th>
								</thead>
								<tbody>
									<tr class="on">
										<td>3</td>
										<td class="withLogo">서울</td>
										<td>16</td>
										<td>27</td>
										<td>8</td>
										<td>3</td>
										<td>5</td>
									</tr>
									<tr>
										<td>1</td>
										<td class="ulsan">울산</td>
										<td>16</td>
										<td>38</td>
										<td>12</td>
										<td>2</td>
										<td>2</td>
									</tr>
									<tr>
										<td>2</td>
										<td class="jeju">제주</td>
										<td>16</td>
										<td>28</td>
										<td>8</td>
										<td>4</td>
										<td>4</td>
									</tr>
									<tr>
										<td>4</td>
										<td class="pohang">포항</td>
										<td>16</td>
										<td>27</td>
										<td>7</td>
										<td>6</td>
										<td>3</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div class="section01_Match">						<!-- 560px	330px -->
					<div class="section01_Match_top cf">			<!-- 높이 60 -->
					
						<div class="Match_prevWrap">	 	<!-- 59 60 -->
							<a class="match_Prev" href="#none">
								<i class="fa-solid fa-chevron-left"></i>
							</a>
						</div>

						<div class="Match_tit"><!-- 440 60 -->
							<h3>FC SEOUL MATCHES</h3>
						</div>		

						<div class="Match_nextWrap">		<!-- 59 60 -->
							<a class="match_Next" href="#none">
								<i class="fa-solid fa-chevron-right"></i>
							</a>
						</div>  	

					</div>

					<div class="section01_Match_bot">
						<ul class="match_slideWrap">
							<li>
							
									<a href="#none"><span>FC서울 원정 경기</span></a>		<!-- 200 46 -->
							
							</li>

							<li>
							
								
									<a href="#none" class="match_ticket"><span>티켓 예매하기 <i class="fa-solid fa-chevron-right"></i></span></a>		
								
							</li>

							<li>
							
								
									<a href="#none" class="prevMatch"><span>경기결과 <i class="fa-solid fa-chevron-right"></i></span></a>		
							
							</li>

							
						</ul>
					</div>
				</div>

				<div class="section01_Ticket">		<!-- 330px 330px -->
					<a href="#none"><img src="./img/ticket_information.jpg" alt=""></a>
				</div>

			</div>
		</div>
		<div id="section02">
			<div id="section02Wrap">

				<div id="section02_Left">
					<h2>FC SEOUL OFFICIAL ONLINE SHOP</h2>
					<br>
					<a href="#none" class="shortcuts">쇼핑몰 바로가기 <i class="fa-solid fa-chevron-right"></i></a>
					<br>
					<br>
					<h3>Best Product</h3>
					<br>
					<ul class="bpul">
						<li>
							<a href="#none">
								<img src="./img/best-Item_Img01.jpg" alt="best-Item_Img01">		
								<p>이달의 선수 패치</p>	
								<p>₩13,000</p>					
							</a>
						</li>

						<li>
							<a href="#none">
								<img src="./img/best-Item_Img02.jpg" alt="best-Item_Img02">			
								<p>엠블럼 뱃지</p>	
								<p>₩5,000</p>						
							</a>
						</li>

						<li>
							<a href="#none">
								<img src="./img/best-Item_Img03.jpg" alt="best-Item_Img03">		
								<p>23 개인 마킹</p>	
								<p>₩17,000</p>							
							</a>
						</li>
					</ul>
				</div>

				<div id="section02_Right">
					<h3>Recommend products</h3>
					<ul class="section02_prevWrap">
						<li><a href="#none"><i class="fa-solid fa-circle-chevron-left"></i></a></li>
					</ul>
					<div class="section02_Slidebox">	<!-- 245 300 -->
						<ul class="section02_SlideWrap">
							<li>
								<a href="#none">
									<img src="./img/section02_slideImg01.jpg" alt="section02_slideImg01">
									<p>22. FC서울 포토레인보우 (조영욱)</p>
									<p>₩10,000</p>
								</a>
							</li>
							<li>
								<a href="#none">
									<img src="./img/section02_slideImg02.jpg" alt="section02_slideImg02">
									<p>22. FC서울 포토레인보우 (나상호)</p>
									<p>₩10,000</p>
								</a>
							</li>
							<li>
								<a href="#none">
									<img src="./img/section02_slideImg03.jpg" alt="section02_slideImg03">
									<p>22. FC서울 포토레인보우 (오스마르)</p>
									<p>₩10,000</p>
								</a>
							</li>
						</ul>
						<ul class="section02_SlideNum">
							<li class="bl">1/3</li>
							<li>2/3</li>
							<li>3/3</li>
						</ul>

						<ul class="section02_stop_play">
							<li class="section02_stop">
								<a href="#none"><i class="fa-solid fa-stop"></i></a>
							</li>
							<li class="section02_play">
								<a href="#none"><i class="fa-solid fa-play"></i></a>
							</li>
						</ul>

					</div>
					<ul class="section02_nextWrap">
						<li><a href="#none"><i class="fa-solid fa-circle-chevron-right"></i></a></li>
					</ul>
				</div>

			</div>
		</div>
		<div id="section03">	<!-- 너비 1920px 높이 522 px-->
			<div id="section03Wrap">
				<div class="event_default">

				</div>

				<div class="app_banner">
					<p class="Official_App">Official App</p>
					<p class="app_notice">편리한 FC서울 공식 앱을 다운받아보세요.</p>
					<ul class="appWrap">
						<li class="android">
							<a href="#none"><img src="./img/Android.jpg" alt="Android"></a>
						</li>

						<li class="iphone">
							<a href="#none"><img src="./img/iphone.jpg" alt="iphone"></a>
						</li>
					</ul>
				</div>

				<div class="eventWrap">
					<div class="eventWrap_top cf">		<!-- 384 168 -->
						<a href="#none"><img src="./img/bg_section03_Img03.jpg" alt="bg_section03_Img03"></a>
					</div>

					<div class="eventWrap_bot">		<!-- 384 170 -->
					<a href="#none"><img src="./img/bg_section03_Img04.jpg" alt="bg_section03_Img04"></a>
					</div>
				</div>
			</div>
		</div>
		<br>
		<br>
		<?php include "./main.php";?> <!-- 메인 콘텐츠 파일 불러오기. 메인 페이지 중앙에 있는 메인 콘텐츠(main.php)를 불러옴. 게시판의 최근 게시글을 불러오고 포인트 랭킹을 표시.-->
		
		<div id="section04">	<!-- 너비 1920px 높이 825 px -->
			<div id="section04Wrap">
				<h3>FC SEOUL SNS</h3>
				<div>
				<iframe width="376" height="207" src="https://www.youtube.com/embed/QawvBVXCdI0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>

				<div>
				<iframe width="376" height="207" src="https://www.youtube.com/embed/xzsqQ2A9Drs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>

				<div>
				<iframe width="376" height="207" src="https://www.youtube.com/embed/7gFjDm7i7_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>

				<div>
				<iframe width="376" height="207" src="https://www.youtube.com/embed/1X0wBbxcY28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>

				<div>
				<iframe width="376" height="207" src="https://www.youtube.com/embed/9JXB0Y7Rsdo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>

				<div>
				<iframe width="376" height="207" src="https://www.youtube.com/embed/LEpeMENfgM0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
			</div>
		</div>
		<div id="section05">	<!-- 너비 1920px 높이 295 px -->
			<div id="section05Wrap">
				<h3>FC SEOUL의 더 많은 소식을 SNS를 통해 만나보세요.</h3>
				<br>
				<div class="facebook">
					<a href="#none"><img src="./img/facebook.png" alt=""></a>
				</div>

				<div class="instagram">
					<a href="#none"><img src="./img/instagram.png" alt=""></a>
				</div>

				<div class="youtube">
					<a href="#none"><img src="./img/youtube.png" alt=""></a>
				</div>
			</div>
		</div>

		<div id="section06">	<!-- 너비 1920px 높이 502 px -->
			<div id="section06Wrap">
				<div>
					<p><strong>MAIN SPONSORS</strong></p>
					
					<a href="#none"><img src="./img/GS01.jpg" alt="GS01"></a>
					<a href="#none"><img src="./img/GS02.jpg" alt="GS02"></a>
					<a href="#none"><img src="./img/GS03.jpg" alt="GS03"></a>
					<a href="#none"><img src="./img/GS04.jpg" alt="GS04"></a>
					<a href="#none"><img src="./img/GS05.jpg" alt="GS05"></a>
					<a href="#none"><img src="./img/GS06.jpg" alt="GS06"></a>
					<a href="#none"><img src="./img/GS07.jpg" alt="GS07"></a>
				</div>

				<div>
					<p><strong>OFFICIAL SPONSORS</strong></p>
				
					<a href="#none"><img src="./img/official_sponsor01.jpg" alt="official_sponsor01"></a>
					<a href="#none"><img src="./img/official_sponsor02.jpg" alt="official_sponsor02"></a>
					<a href="#none"><img src="./img/official_sponsor03.jpg" alt="official_sponsor03"></a>
					<a href="#none"><img src="./img/official_sponsor04.jpg" alt="official_sponsor04"></a>
					<a href="#none"><img src="./img/official_sponsor05.jpg" alt="official_sponsor05"></a>
					<a href="#none"><img src="./img/official_sponsor06.jpg" alt="official_sponsor06"></a>
					<a href="#none"><img src="./img/official_sponsor07.jpg" alt="official_sponsor07"></a>
					<a href="#none"><img src="./img/official_sponsor08.jpg" alt="official_sponsor08"></a>
				</div>

				<div>
					<p><strong>OFFICIAL KIT SUPPLIER</strong></p>
					<a href="#none"><img src="./img/prospecs.jpg" alt="prospecs"></a>
				</div>
					
				<div>
					<p><strong>OFFICIAL PRINCIPAL PARTNERS</strong></p>
					<a href="#none"><img src="./img/offcial_principal_partners01.jpg" alt="offcial_principal_partners01"></a>
					<a href="#none"><img src="./img/offcial_principal_partners02.jpg" alt="offcial_principal_partners02"></a>
					<a href="#none"><img src="./img/offcial_principal_partners03.jpg" alt="offcial_principal_partners03"></a>
					<a href="#none"><img src="./img/offcial_principal_partners04.jpg" alt="offcial_principal_partners04"></a>
					<a href="#none"><img src="./img/offcial_principal_partners05.jpg" alt="offcial_principal_partners05"></a>
					<a href="#none"><img src="./img/offcial_principal_partners06.jpg" alt="offcial_principal_partners06"></a>
					<a href="#none"><img src="./img/offcial_principal_partners07.jpg" alt="offcial_principal_partners07"></a>
				</div>

				<div>
					<p><strong>OFFICIAL PARTNERS</strong></p>
					<a href="#none"><img src="./img/offcial_partners01.jpg" alt="offcial_partners01"></a>
					<a href="#none"><img src="./img/offcial_partners02.jpg" alt="offcial_partners02"></a>
					<a href="#none"><img src="./img/offcial_partners03.jpg" alt="offcial_partners03"></a>
					<a href="#none"><img src="./img/offcial_partners04.jpg" alt="offcial_partners04"></a>
					<a href="#none"><img src="./img/offcial_partners05.jpg" alt="offcial_partners05"></a>
					<a href="#none"><img src="./img/offcial_partners06.jpg" alt="offcial_partners06"></a>
					<a href="#none"><img src="./img/offcial_partners07.jpg" alt="offcial_partners07"></a>
				</div>
			</div>
		</div>
	</section> 
	<footer>
		<?php include "./footer.php";?> <!-- 메인 페이지 하단을 구성하는 하단 푸터(footer.php)를 불러 옴  -->
	</footer>

	<script>
		var swiper1 = new Swiper('.swiper1', {
      spaceBetween: 30, // 슬라이드간 간격
      loop: true,    // 무한 반복
      pagination: {   // 페이징
        el: '.swiper-pagination1',
        clickable: true,  // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
      },
       autoplay: {
        delay: 4000,
      },
      navigation: {   // 네비게이션
        nextEl: '.next1',   // 다음 버튼 클래스명
        prevEl: '.prev1',   // 이전 버튼 클래스명
      },
    });
	</script>
</body>
</html>
