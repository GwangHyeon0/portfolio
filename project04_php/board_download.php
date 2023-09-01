<?php
// 첨부파일 정보 GET방식으로 전달 받기

$real_name = $_GET["real_name"];    // 서버에 저장된 파일명
$file_name = $_GET["file_name"];    // 서버에 저장된 파일명
$file_type = $_GET["file_type"];    // 서버에 저장된 파일명
$real_path = "./data/".$real_name;    // 서버에 저장된 파일명

// 익스에서는 한글이 깨지는 현상이 있음
// 브라우저가 인터넷 익스플로러인지 판단
$ie = preg_match('~MSIE|Internet Explorer~i', $_SERVER['HTTP_USER_AGENT']) || (strpos($_SERVER['HTTP_USER_AGENT'], 'Trident/7.0') !== false && strpos($_SERVER['HTTP_USER_AGENT'], 'rv:11.0') !== false);

// ie인 경우 한글 파일명이 깨지는 경우를 방지하기 위한 코드
if($ie){
    // 파일명의 문자셋 변경
    $file_name = iconv('utf-8','euc-kr',$file_name);
}

// 다운로드 하려는 파일인 $file_path가 존재하는지 검사
if(file_exists($file_path)){

    // 파일을 읽고 쓸수 있는 모드로 열어~
    $fp = fopen($file_path, "rb");

    //Header()함수로 클라이언트 브라우저에 알려줌.
    Header("Content-type: application/x-msdownload"); 
    Header("Content-Length: ".filesize($file_path));     
    Header("Content-Disposition: attachment; filename=".$file_name);   
    Header("Content-Transfer-Encoding: binary"); 
	Header("Content-Description: File Transfer"); 
    Header("Expires: 0");

}
/* 파일 전송 및 파일 포인터 닫기. 다운로드가 완료되는 fclose()함수로 닫음. */
// fpassthru() : 현재 파일 포인터가 지시하는 위치부터 끝까지 파일을 읽어 출력 버퍼에 저장하는 함수
// 이 함수는 false반환 실패한 경우 문자 수가, 송신 반환됨.(즉, 반환에 실패하지 않는 경우 파일 닫기 실행되도록~)
if(!fpassthru($fp))
    fclose();
    
?>