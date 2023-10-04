/**
 * <PRE>
 * 1. Name : PATH
 * 2. Comment   : 도메인 주소 ENUM 관리
 * 3. Author    : CIK
 * <PRE>
 */
export const enum PATH {
	//메인
	MAIN = '/Debrix',
	// MAIN = '/',

	// LOGIN = '/login',
	ERROR = '/*',

	//메뉴
	COMPANY00 = '/Debrix/company',
	COMPANY01 = '/Debrix/company/organization',
	COMPANY02 = '/Debrix/company/certificate',
	COMPANY03 = '/Debrix/company/patent',
	COMPANY04 = '/Debrix/company/location',

	BUSINESS00 = '/Debrix/business',
	BUSINESS01 = '/Debrix/business/history',

	RESEARCH00 = '/Debrix/research',
	RESEARCH01 = '/Debrix/research/history',
	RESEARCH02 = '/Debrix/research/list',
	RESEARCH03 = '/Debrix/research/detail/:menu/:index',

	PRCENTER00 = '/Debrix/prcenter',
	PRCENTER01 = '/Debrix/prcenter/faq',
	PRCENTER02 = '/Debrix/prcenter/pr',
	PRCENTER03 = '/Debrix/prcenter/detail/:menu/:index',

	RECRUIT00 = '/Debrix/recruit',
	RECRUIT01 = '/Debrix/recruit/ment',
	RECRUIT02 = '/Debrix/recruit/detail/:menu/:index',
	RECRUIT03 = '/Debrix/recruit/welfare',

	CUSTOMER00 = '/Debrix/customer',
	CUSTOMER01 = '/Debrix/customer/util',
	CUSTOMER02 = '/Debrix/customer/detail/:menu/:index',

	STATISTIC = '/Debrix/statistic'
}

/* ******************* 메뉴 리스트 ******************* */
//메뉴
export const enum MENU {
	COMPANY, //회사소개
	BUSINESS, //사업분야
	// HISTORY, //사업실적
	RESEARCH, //연구개발
	PRCENTER, //홍보센터
	RECRUIT, //인재채용
	CUSTOMER, //고객지원
	BLANK //
}

//회사소개
export const enum COMPANY {
	INTRO, //CEO인사말 및 회사소개
	ORGANIZATION, //조직도 및 인력현황
	CERTIFICATE, //면허등록현황
	PATENT, //특허및 수상실적
	LOCATION //오시는길
}
export const enum BUSINESS {
	BUSINESS, //사업분야
	HISTORY //사업실적
}
export const enum RESEARCH {
	FIELD, //연구분야
	HISTORY, //연구실적
	LIST //산업재산권 현황
}
export const enum PRCENTER {
	NEWS, //NEWS
	FAQ, //FAQ
	PR //PR자료
}
export const enum RECRUIT {
	INFO, //채용안내
	MENT //채용공고
}
export const enum CUSTOMER {
	AS, //A/S접수
	UTIL //자료실
}
export const enum MENU_NAME {}
