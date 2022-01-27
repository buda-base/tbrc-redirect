const pathmap = {
	"specials/catalogViews/category/01-ka": "resource/bdr:O9TAXTBRC2016052KG225324",
	"specials/catalogViews/category/02-kha": "resource/bdr:O9TAXTBRC2016052KG225372",
	"specials/catalogViews/category/03-ga": "resource/bdr:O9TAXTBRC2016052KG225383",
	"specials/catalogViews/category/04-nga": "resource/bdr:O9TAXTBRC2016052KG226384",
	"specials/catalogViews/category/05-ca": "resource/bdr:O9TAXTBRC2016052KG226418",
	"specials/catalogViews/category/06-cha": "resource/bdr:O9TAXTBRC2016052KG226531",
	"specials/catalogViews/category/07-ja": "resource/bdr:O9TAXTBRC2016052KG226586",
	"specials/catalogViews/category/08-nya": "resource/bdr:O9TAXTBRC2016052KG226667",
	"specials/catalogViews/category/09-ta": "resource/bdr:O9TAXTBRC2016052KG226784",
	"specials/catalogViews/category/10-tha": "resource/bdr:O9TAXTBRC2016052KG226920",
	"specials/catalogViews/category/11-da": "resource/bdr:O9TAXTBRC2016052KG227157",
	"specials/catalogViews/category/12-na": "resource/bdr:O9TAXTBRC2016052KG228264",
	"specials/catalogViews/category/13-pa": "resource/bdr:O9TAXTBRC2016052KG228290",
	"specials/catalogViews/category/14-pha": "resource/bdr:O9TAXTBRC2016052KG228410",
	"specials/catalogViews/category/15-ba": "resource/bdr:O9TAXTBRC2016052KG228444",
	"etexts/input": "legacy",
	"etexts/ocr": "legacy",
	"etexts/faceted": "legacy",
	"persons": "legacy",
	"persons/tulkus": "legacy",
	"persons/century": "legacy",
	"persons/tradition": "legacy",
	"persons/lineages": "legacy",
	"persons/lineages/O5JW11095JW1110": "legacy",
	"persons/lineages/O5JW11095JW1111": "legacy",
	"persons/lineages/O5JW11095JW1112": "legacy",
	"places": "legacy",
	//"places/*": "legacy", ??
	//"specials/selected/*": "legacy", ??
	"specials/catalogViews/author": "legacy",
	"specials/catalogViews/works": "legacy",
	"specials/third/nlm00": "associated/bdr:PR1NLM00",
	"specials/third/fpl01": "associated/bdr:bdr:PR1FPL01",
	"specials/third/eap1150": "associated/bdr:PR1EAP1150",
	"specials/third/ngmpp00": "associated/bdr:PR1NGMPP00",
	"specials/third/pemakod00": "associated/bdr:PR1PEMAKOD00",
	"specials/third/tibet00": "associated/bdr:PR1TIBET00",
	"specials/third/lokesh01": "associated/bdr:PR1LOKESH01",
	"specials/third/cihts00": "associated/bdr:PR1CIHTS00",
	"specials/third/vienna00": "associated/bdr:PR1VIENNA00",
	"specials/core": "https://library.bdrc.io/search?q=%22core%22&lg=en&t=Product&s=title",
	"specials/core/ctc01": "associated/bdr:PRHD01",
	"specials/core/ctc02": "associated/bdr:PRHD02",
	"specials/core/ctc03": "associated/bdr:PRHD03",
	"specials/core/ctc04": "associated/bdr:PR00JW501092",
	"specials/core/ctc05": "associated/bdr:PR1GS49488",
	"specials/core/ctc06": "associated/bdr:PR01JW11672",
	"specials/core/ctc07": "associated/bdr:PR3JW7543",
	"specials/core/ctc08": "associated/bdr:PR60CTX96",
	"specials/core/ctc09": "associated/bdr:PR01CTC09",
	"specials/core/ctc10": "associated/bdr:PR1CTC10",
	"specials/core/ctc11": "associated/bdr:PR1CTC11",
	"specials/core/ctc12": "associated/bdr:PR1CTC12",
	"specials/core/ctc13": "associated/bdr:PR1CTC13",
	"specials/core/ctc14": "associated/bdr:PR1CTC14",
	"specials/core/ctc15": "associated/bdr:PR1CTC15",
	"specials/core/ctc16": "associated/bdr:PR1CTC16",
	"specials/core/ctc17": "associated/bdr:PR1CTC17",
	"specials/prints": "https://library.bdrc.io/search?q=%22wisdom%22&lg=en&t=Product",
	"specials/prints/wmdl01": "associated/bdr:PR01DOR0",
	"specials/prints/wmdl02": "associated/bdr:PR01DOR1",
	"specials/prints/wmdl03": "associated/bdr:PR01DOR2",
	"specials/prints/wmdl04": "associated/bdr:PR01DOR3",
	"specials/prints/wmdl05": "associated/bdr:PR01DOR4",
	"specials/prints/wmdl06": "associated/bdr:PR01DOR5",
	"specials/prints/wmdl07": "associated/bdr:PR01DOR7",
	"specials/prints/wmdl08": "associated/bdr:PR01DOR111",
	"specials/prints/wmdl09": "associated/bdr:PR01DOR112",
	"footer/about/missionhistory": "https://www.bdrc.io/about-us/",
	"footer/about/preservation": "https://www.bdrc.io/programs/",
	"footer/about/bdrcprograms": "https://www.bdrc.io/programs/",
	"footer/about/access": "https://www.bdrc.io/access-policies/",
	"footer/community/people": "https://www.bdrc.io/people/",
	"footer/about/genesmith": "https://www.bdrc.io/people/e-gene-smith/",
	"footer/about/donate": "https://www.bdrc.io/donation/",
	"footer/about/news": "https://www.bdrc.io/news/",
	"footer/about/contact": "https://www.bdrc.io/contact/",
	"footer/about/print": "https://www.bdrc.io/contact/",
	"recentacquisitions": "https://library.bdrc.io/",
	"search": "https://library.bdrc.io/",
	"footer/community/partners": "https://www.bdrc.io/partners/",
	"footer/news/20190525": "https://www.bdrc.io/blog/2019/05/25/the-kagyu-tradition/",
	"footer/news/20190517": "https://www.bdrc.io/blog/2019/05/17/the-nyingma-tradition/",
	"footer/news/20190510": "https://www.bdrc.io/blog/2019/05/10/rare-bon-texts-from-the-bdrc-archive/",
	"footer/news/20190307": "https://www.bdrc.io/blog/2019/03/07/were-hiring/",
	"footer/news/20181005": "https://www.bdrc.io/blog/2018/10/05/bdrc-board-selects-jann-ronis-as-new-executive-director/",
	"footer/news/20180911": "https://www.bdrc.io/blog/2018/09/11/digitizing-the-national-library-of-mongolia/",
	"footer/news/20180813": "https://www.bdrc.io/blog/2018/08/13/dispatch-from-the-field-nepal/",
	"footer/news/20180628": "https://www.bdrc.io/blog/2018/06/28/bdrc-in-thailand-2/",
	"footer/news/20180430": "https://www.bdrc.io/blog/2018/04/30/support-bdrcs-spring-appeal/",
	"footer/news/20180405": "https://www.bdrc.io/blog/2018/04/05/the-nepalese-buddhist-sanskrit-manuscript-scanning-initiative/",
	"footer/news/20180319": "https://www.bdrc.io/blog/2018/03/19/bdrc-opens-office-in-europe/",
	"footer/news/20180307": "https://www.bdrc.io/blog/2018/03/26/buddhist-digital-resource-center-seeks-executive-director/",
	"footer/news/20180212": "https://www.bdrc.io/blog/2018/02/12/the-gilt-manuscripts-of-the-fragile-palm-leaves-collection/",
	"footer/news/20180108": "https://www.bdrc.io/blog/2018/01/08/2017-year-in-review/",
	"footer/news/20171103": "https://www.bdrc.io/blog/2017/11/27/khenpo-sodargye-visits-bdrc/",
	"footer/news/20170718": "https://www.bdrc.io/blog/2017/11/17/meet-bdrcs-new-mobile-app-and-online-library-for-china/",
	"footer/news/20170417": "https://www.bdrc.io/blog/2017/04/26/announcing-the-sanskrit-and-chinese-buddhist-library-network/",
	"footer/news/20170327": "https://www.bdrc.io/blog/2017/03/27/announcing-the-fragile-palm-leaves-digitization-project/",
	"footer/news/20170320": "https://www.bdrc.io/blog/2017/03/20/announcing-expanded-bdrc-board-of-directors/",
	"footer/news/20170210": "https://www.bdrc.io/blog/2017/03/01/introducing-buddhist-digital-resource-center-bdrc/",
	"footer/news/20160520": "https://www.bdrc.io/blog/2016/05/20/venerable-khenchen-konchog-gyaltsen-rinpoche-visits-tbrc/",
	"footer/news/20160517": "https://www.bdrc.io/blog/2016/05/17/david-weinberger-on-the-future-of-digital-libraries/",
	"footer/news/20160418": "https://www.bdrc.io/blog/2016/04/18/khenpo-karma-jamyang-gyaltsen-visits-tbrc/",
	"footer/news/20160413": "https://www.bdrc.io/blog/2016/04/13/tbrc-board-president-wins-prestigious-guggenheim-fellowship/",
	"footer/news/20160321": "https://www.bdrc.io/blog/2016/03/21/kyabgon-phakchok-rinpoche-visits-tbrc/",
	"footer/news/20151207": "https://www.bdrc.io/blog/2015/12/07/help-tbrc-keep-scanning-tibetan-texts/",
	"footer/news/20151118": "https://www.bdrc.io/blog/2015/11/18/the-digital-woodblock-reprinting-the-ragya-kanjur-from-tbrc-scans/",
	"footer/news/20151028": "https://www.bdrc.io/blog/2015/10/28/matthieu-ricard-visits-tbrc/",
	"footer/news/20150826": "https://www.bdrc.io/blog/2015/08/08/mindrolling-jetsun-khandro-rinpoche-visits-tbrc/",
	"footer/news/20150630": "https://www.bdrc.io/blog/2015/06/06/tbrc-brings-tibetan-manuscripts-onto-the-google-cultural-institute/",
	"footer/news/20150423": "https://www.bdrc.io/blog/2015/04/23/the-hunt-for-the-ragya-kangyur/",
	"footer/news/20150407": "https://www.bdrc.io/blog/2015/04/07/his-holiness-gyalwang-karmapa-visits-tbrc/",
	"footer/news/20150306": "https://www.bdrc.io/blog/2015/03/06/the-library-of-congress-rockhill-kangyur-release/",
	"footer/news/20150220": "https://www.bdrc.io/blog/2015/02/20/diving-into-the-backlog-bringing-wisdom-to-light/",
	"footer/news/20150129": "https://www.bdrc.io/blog/2015/01/29/tbrc-launches-collaboration-with-soas-to-improve-access-to-tibetan-digital-texts/",
	"footer/news/20141219": "https://www.bdrc.io/blog/2014/12/19/genes-vision-for-tbrc/",
	"footer/news/20141216": "https://www.bdrc.io/blog/2014/12/16/running-out-of-disk-space-as-we-approach-10-million-pages/",
	"footer/news/20141215": "https://www.bdrc.io/blog/2014/12/15/article-about-genes-life-story-published-in-prestigious-chinese-magazine/",
	"footer/news/201410291": "https://www.bdrc.io/blog/2014/10/29/tbrc-talks-a-rule-based-tagger-for-classical-tibetan-tuesday-11-4/",
	"footer/news/201410292": "https://www.bdrc.io/blog/2014/10/29/peter-gruber-in-memoriam/",
	"footer/news/20141017": "https://www.bdrc.io/blog/2014/10/17/remembering-dezhung-rinpoche-and-gene-smith/",
	"footer/news/20141008": "https://www.bdrc.io/blog/2014/10/08/tbrc-talks-scholars-and-scribes-friday-10-10/",
	"footer/news/20140924": "https://www.bdrc.io/blog/2014/09/24/how-to-use-the-tibetan-etext-repository/",
	"footer/news/20140915": "https://www.bdrc.io/blog/2014/09/15/lineage-transmission-research-the-backstory/",
	"footer/news/20140909": "https://www.bdrc.io/blog/2014/09/09/the-lineage-transmission-knowledge-model/",
	"footer/news/20140828": "https://www.bdrc.io/blog/2014/08/28/tibetan-tulku-lines-and-networks/",
	"footer/news/20140607": "https://www.bdrc.io/blog/2014/06/07/tbrc-harvard-partnership-to-support-the-long-term-preservation-of-tibetan-texts/",
	"footer/news/20140502": "https://www.bdrc.io/blog/2014/05/02/tibetan-search-enhancements/",
	"footer/news/20140320": "https://www.bdrc.io/blog/2014/03/20/tbrc-phonetic-tulku-titles/",
	"footer/news/20140312": "https://www.bdrc.io/blog/2014/03/12/the-nyingma-kama-collections/",
	"footer/news/20140305": "https://www.bdrc.io/blog/2014/03/05/tbrc-on-public-radio-international/",
	"footer/news/20140220": "https://www.bdrc.io/blog/2014/02/20/the-impact-of-donations/",
	"footer/news/20140216": "https://www.bdrc.io/blog/2014/02/16/tbrc-in-the-ny-times/",
	"footer/news/20140213": "https://www.bdrc.io/blog/2014/02/13/talk-with-prof-john-dunne/",
}

async function instanceQnameFromOutlineNode(noderid) {
	url = "//purl.bdrc.io/query/table/instanceFromOutlineNode?L_ON="+noderid+"&format=json"
	const response = await fetch(url);
	if (!response.ok)
		return null
  	const res = await response.json();
  	if (!res["results"]["bindings"].length)
  		return null
  	uri = res["results"]["bindings"][0]["i"]["value"]
  	return "bdr:"+uri.substring(29)
}

function addLang(url, lang, firstarg) {
	// lang = en|bo|zh
	// if redirect starts with https://www.bdrc.io/, argument is ?lang=(bo|en|zh-hans)
	// if redirect starts with https://library.bdrc.io/,argument is ?uilang=(bo|en|zh)
	if (!lang)
		return url
	url += firstarg ? '?' : '&'
	if (url.startsWith("https://library")) {
		return url+"uilang="+lang
	}
	if (url.startsWith("https://www.bdrc.io")) {
		if (lang == "zh")
			lang = "zh-hans"
		return url+"lang="+lang
	}
	return url+"lang="+lang
}

async function redirectRID(rid, style, lang) {
	let mainrid = rid
	let noderid = null
	// simple style: O1GS12980|O1GS129802KG218862$W22084
	// ViewByOutline style: O1GS129802KG218864|W22084
	// ViewInWIndow style: W22084|0888|3|1|1|588
	if (style == "simple" && !rid.includes("$") && !rid.includes("|")) {
		// potential issue with:
		// - conceptual works that should be redirected to a BUDA work
		// - etext in W works that have been changed to IE records
		// both have their W RIDs redirected on BUDA, but not the MW,
		// perhaps we should?
		if (rid.startsWith("W"))
			rid = "M"+rid
		return addLang("https://library.bdrc.io/show/bdr:"+rid, lang, true)
	}
	if (style == "simple") {
		dollarparts = rid.split('$')
		mainrid = dollarparts[1]
		rest = dollarparts[0]
		noderid = rest.split('|')[1]
	} else if (style == "ViewByOutline") {
		barparts = rid.split("|")
		mainrid = barparts[1]
		noderid = barparts[0]
	} else {
		// ViewInWindow
		barparts = rid.split("|")
		// here we take the RID of the image group
		vollname = barparts[1]
		if (!vollname.startsWith("I"))
			vollname = "I"+vollname
		wlname = barparts[0]
		return addLang("https://library.bdrc.io/show/bdr:M"+wlname, lang, true)+"#open-viewer" 
	}
	instanceQname = await instanceQnameFromOutlineNode(noderid)
	if (!instanceQname)
		return addLang("https://library.bdrc.io/show/bdr:M"+mainrid, lang, true)
	return addLang("https://library.bdrc.io/show/bdr:M"+mainrid+"?part="+instanceQname, lang, false)
}

async function getRedirectUrl(location) {
	let hash = location.hash
	const urlSearchParams = new URLSearchParams(location.search);
	const params = Object.fromEntries(urlSearchParams.entries());
	let redirectbase = null
	const lang = params.locale
	const urlstring = location.toString()
	if (hash) {
		if (hash.startsWith("#!"))
			hash = hash.substring(2)
		else
			hash = hash.substring(1)
		mapped = pathmap[hash]
		if (mapped) {
			if (mapped.startsWith("associated/"))
				return addLang("https://library.bdrc.io/search?t=Scan&s=title%20forced&r="+mapped.substring(11), lang, false)
			else if (mapped.startsWith("resource/"))
				return addLang("https://library.bdrc.io/show/"+mapped.substring(9), lang, false)
			else if (mapped == "legacy")
				return urlstring.replace(/[^/]*tbrc\.org/, "legacy.tbrc.org")
			else 
				return addLang(mapped, lang, !mapped.includes('?'))
		} else if (hash.startsWith("place/") || hash.startsWith("specials/selected/")) {
			return urlstring.replace(/[^/]*tbrc\.org/, "legacy.tbrc.org")
		} else if (hash.startsWith("rid=")) {
			return redirectRID(hash.substring(4), "simple", lang)
		} else if (hash.startsWith("library_work_ViewByOutline-")) {
			return redirectRID(hash.substring(27), "ViewByOutline", lang)
		} else if (hash.startsWith("library_work_ViewInWIndow-")) {
			return redirectRID(hash.substring(26), "ViewInWIndow", lang)
		} else if (hash.startsWith("library_work_Object-")) {
			return redirectRID(hash.substring(20), "simple", lang)
		} else if (hash.startsWith("library_person_Object-")) {
			return redirectRID(hash.substring(22), "simple", lang)
		} else if (hash.startsWith("library_place_Object-")) {
			return redirectRID(hash.substring(21), "simple", lang)
		}
	}
	if (params.RID)
		return redirectRID(params.RID, "simple", lang)
    if (location.pathname.startsWith("/eBooks")) {
    	const filename = location.pathname.split("/")[2]
    	const filenameparts = filename.split("-")
    	let iglname = filenameparts[1]
    	let wlname = filenameparts[0]
    	if (!iglname.startsWith("I"))
    		iglname = "I"+iglname
        //return "https://iiif.bdrc.io/download/pdf/v:bdr:"+iglname+"::"+filenameparts[2]+"-"+filenameparts[3]
        return addLang("https://library.bdrc.io/show/bdr:M"+wlname, lang, true)
    }
    if (location.pathname == "/")
    	return addLang("https://library.bdrc.io", lang, true)
	return urlstring.replace(/[^/]*tbrc\.org/, "legacy.tbrc.org")
}

async function test_this() {
	res = await getRedirectUrl(window.location)
	console.log(res)
}

async function test_one(url, expected) {
	urlobj = new URL(url)
	res = await getRedirectUrl(urlobj)
	if (res != expected) {
		console.error(url+" -> "+res+" instead of "+expected)
	} else {
		console.log("OK: "+url+" -> "+res)
	}
}

//test_this()
/*
test_one("https://www.tbrc.org/#!rid=W22084")
test_one("https://www.tbrc.org/#rid=W22084")
test_one("https://www.tbrc.org/#rid=P123")
test_one("https://www.tbrc.org/link?RID=W12827")
test_one("https://www.tbrc.org/?locale=zh#!etexts/ocr")
test_one("https://www.tbrc.org/?locale=zh#!footer/news/20140915")
test_one("https://www.tbrc.org/")
test_one("https://www.tbrc.org/?locale=zh")
test_one("https://www.tbrc.org/foobar")
test_one("https://www.tbrc.org/#!rid=O01CT0042|O01CT00424CZ206477$W12827") // exists
test_one("https://www.tbrc.org/#!rid=O1GS12980|O1GS129802KG218875$W22084") // doesn't exist anymore on BUDA
test_one("https://www.tbrc.org/#!specials/prints/wmdl01")
test_one("https://www.tbrc.org/#!specials/catalogViews/category/10-tha")
test_one("https://www.tbrc.org/#library_work_ViewByOutline-O1GS129802KG218864|W22084") // doesn't exist
test_one("https://www.tbrc.org/#library_work_ViewByOutline-O01CT00424CZ206477|W12827") // does exist
test_one("https://www.tbrc.org/#library_work_ViewInWIndow-W22084|0888|3|1|1|588")
test_one("https://www.tbrc.org/eBooks/W22084-0886-3-4-abs.pdf", "https://iiif.bdrc.io/download/pdf/v:bdr:I0886::3-4")
test_one("https://www.tbrc.org/eBooks/W22084-0886-1-624-any.pdf", "https://iiif.bdrc.io/download/pdf/v:bdr:I0886::1-624")
test_one("http://tbrc.org/#library_work_Object-W15098")
test_one("http://tbrc.org/#library_person_Object-P7894")
*/

async function redirect() {
	res = await getRedirectUrl(window.location)
	window.location.replace(res)
}

redirect()