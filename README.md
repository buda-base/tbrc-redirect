# tbrc-redirect

html page that redirects URLs from tbrc.org to bdrc.io


#### patterns

- `#!rid=XXX`
- `#rid=XXX`
- `?locale=(en|bo|zh|en&both=yes)`
- `link?RID=O1GS12980|O1GS129802KG218862$W22084`
- `link?RID=XXX`
 // caveat: https://github.com/buda-base/BDRC-Lib-App/issues/57
- `#library_work_ViewByOutline-O1GS129802KG218864|W22084`
- `#library_work_ViewInWIndow-W22084|0888|3|1|1|588`
- `public?module=xxx` -> legacy
- `browser/ImageService?work=W22084&igroup=0886&image=1&first=1&last=624&fetchimg=yes` -> https://iiif.bdrc.io/igsi:bdr:I0886::1/full/max/0/default.jpg
- `eBooks/W22084-0886-3-4-abs.pdf` -> https://iiif.bdrc.io/download/pdf/v:bdr:0886::3-4
- `eBooks/W22084-0886-1-624-any.pdf` -> https://iiif.bdrc.io/download/pdf/v:bdr:0886::1-624
- scan-requests/ -> legacy

#### old patterns

- http://tbrc.org/#library_work_Object-W15098
- http://tbrc.org/#!rid=O2MS16391%7CO2MS163914CZ7711$W1PD95844
- http://tbrc.org/#library_person_Object-P7894

#### catalog pages

- #!etexts/input ?
- #!etexts/ocr -> legacy
- #!etexts/faceted -> ?
- #!persons
- #!persons/tulkus ?
- #!persons/century ?
- #!persons/tradition ?
- #!persons/lineages
- #!persons/lineages/O5JW11095JW1110 ?
- #!persons/lineages/O5JW11095JW1111 ?
- #!persons/lineages/O5JW11095JW1112 ?
- #!places (and all further URLs) ?
- `#!specials/selected/bodong` ?
- `#!specials/catalogViews/author` ??? (probably no remapping)
- `#!specials/catalogViews/works` ??? (probably no remapping)
- `#!specials/catalogViews/category/\d*-(?:value)` -> value in O9TAXTBRC201605.xml
- `#!specials/third` -> list of collections
- `#!specials/third/nlm00` -> PR1NLM00
- fpl01 -> PR1FPL01
- etc. (pattern is PR1+uppercase)
- eap1150
- ngmpp00
- pemakod00
- tibet00
- lokesh01
- cihts00
- vienna00
- https://www.tbrc.org/#!specials/core -> https://library.bdrc.io/search?q=%22core%22&lg=en&t=Product&s=title
- #!specials/core/ctc01 -> PRHD01
- ctc02 -> PRHD02
- ctc03 -> PRHD03
- ctc04 -> PR00JW501092
- ctc05 -> PR1GS49488
- ctc06 -> PR01JW11672
- ctc07 -> PR3JW7543
- ctc08 -> PR60CTX96
- ctc09 -> PR01CTC09
- ctc10 -> PR1CTC10
- ctc11 -> PR1CTC11
- ctc12 -> PR1CTC12
- ctc13 -> PR1CTC13
- ctc14 -> PR1CTC14
- ctc15 -> PR1CTC15
- ctc16 -> PR1CTC16
- ctc17 -> PR1CTC17
- https://www.tbrc.org/#!specials/prints -> https://library.bdrc.io/search?q=%22wisdom%22&lg=en&t=Product
- #!specials/prints/wmdl01 -> PR01DOR0
- wmdl02 -> PR01DOR1
- wmdl03 -> PR01DOR2
- wmdl04 -> PR01DOR3
- wmdl05 -> PR01DOR4
- wmdl06 -> PR01DOR5
- wmdl07 -> PR01DOR7
- wmdl08 -> PR01DOR111
- wmdl09 -> PR01DOR112

#### static pages

- `#!footer/about/missionhistory` -> https://www.bdrc.io/about-us/
- `#!footer/about/preservation` -> https://www.bdrc.io/programs/
- `#!footer/about/bdrcprograms` -> https://www.bdrc.io/programs/
- `#!footer/about/access` -> https://www.bdrc.io/access-policies/
- `#!footer/community/people` -> https://www.bdrc.io/people/
- `#!footer/about/genesmith` -> https://www.bdrc.io/people/e-gene-smith/
- `#!footer/about/donate` -> https://www.bdrc.io/donation/
- `https://www.tbrc.org/#!footer/about/news` -> https://www.bdrc.io/news/
- `#!footer/about/contact` -> https://www.bdrc.io/contact/
- `#!footer/about/print` -> https://www.bdrc.io/contact/
- `#!recentacquisitions` -> https://library.bdrc.io/
- `#!search` -> https://library.bdrc.io/
- `#!footer/community/partners` -> https://www.bdrc.io/partners/
- `https://www.tbrc.org/#!footer/news/20190525` -> https://www.bdrc.io/blog/2019/05/25/the-kagyu-tradition/
- https://www.tbrc.org/#!footer/news/20190517 -> https://www.bdrc.io/blog/2019/05/17/the-nyingma-tradition/
- https://www.tbrc.org/#!footer/news/20190510 -> https://www.bdrc.io/blog/2019/05/10/rare-bon-texts-from-the-bdrc-archive/
- https://www.tbrc.org/#!footer/news/20190307 -> https://www.bdrc.io/blog/2019/03/07/were-hiring/
- https://www.tbrc.org/#!footer/news/20181005 -> https://www.bdrc.io/blog/2018/10/05/bdrc-board-selects-jann-ronis-as-new-executive-director/
- https://www.tbrc.org/#!footer/news/20180911 -> https://www.bdrc.io/blog/2018/09/11/digitizing-the-national-library-of-mongolia/
- https://www.tbrc.org/#!footer/news/20180813 -> https://www.bdrc.io/blog/2018/08/13/dispatch-from-the-field-nepal/
- https://www.tbrc.org/#!footer/news/20180628 -> https://www.bdrc.io/blog/2018/06/28/bdrc-in-thailand-2/
- https://www.tbrc.org/#!footer/news/20180430 -> https://www.bdrc.io/blog/2018/04/30/support-bdrcs-spring-appeal/
- https://www.tbrc.org/#!footer/news/20180405 -> https://www.bdrc.io/blog/2018/04/05/the-nepalese-buddhist-sanskrit-manuscript-scanning-initiative/
- https://www.tbrc.org/#!footer/news/20180319 -> https://www.bdrc.io/blog/2018/03/19/bdrc-opens-office-in-europe/
- https://www.tbrc.org/#!footer/news/20180307 -> https://www.bdrc.io/blog/2018/03/26/buddhist-digital-resource-center-seeks-executive-director/
- https://www.tbrc.org/#!footer/news/20180212 -> https://www.bdrc.io/blog/2018/02/12/the-gilt-manuscripts-of-the-fragile-palm-leaves-collection/
- https://www.tbrc.org/#!footer/news/20180108 -> https://www.bdrc.io/blog/2018/01/08/2017-year-in-review/
- https://www.tbrc.org/#!footer/news/20171103 -> https://www.bdrc.io/blog/2017/11/27/khenpo-sodargye-visits-bdrc/
- https://www.tbrc.org/#!footer/news/20170718 -> https://www.bdrc.io/blog/2017/11/17/meet-bdrcs-new-mobile-app-and-online-library-for-china/
- https://www.tbrc.org/#!footer/news/20170417 -> https://www.bdrc.io/blog/2017/04/26/announcing-the-sanskrit-and-chinese-buddhist-library-network/
- https://www.tbrc.org/#!footer/news/20170327 -> https://www.bdrc.io/blog/2017/03/27/announcing-the-fragile-palm-leaves-digitization-project/
- https://www.tbrc.org/#!footer/news/20170320 -> https://www.bdrc.io/blog/2017/03/20/announcing-expanded-bdrc-board-of-directors/
- https://www.tbrc.org/#!footer/news/20170210 -> https://www.bdrc.io/blog/2017/03/01/introducing-buddhist-digital-resource-center-bdrc/
- https://www.tbrc.org/#!footer/news/20160520 -> https://www.bdrc.io/blog/2016/05/20/venerable-khenchen-konchog-gyaltsen-rinpoche-visits-tbrc/
- https://www.tbrc.org/#!footer/news/20160517 -> https://www.bdrc.io/blog/2016/05/17/david-weinberger-on-the-future-of-digital-libraries/
- https://www.tbrc.org/#!footer/news/20160418 -> https://www.bdrc.io/blog/2016/04/18/khenpo-karma-jamyang-gyaltsen-visits-tbrc/
- https://www.tbrc.org/#!footer/news/20160413 -> https://www.bdrc.io/blog/2016/04/13/tbrc-board-president-wins-prestigious-guggenheim-fellowship/
- https://www.tbrc.org/#!footer/news/20160321 -> https://www.bdrc.io/blog/2016/03/21/kyabgon-phakchok-rinpoche-visits-tbrc/
- https://www.tbrc.org/#!footer/news/20151207 -> https://www.bdrc.io/blog/2015/12/07/help-tbrc-keep-scanning-tibetan-texts/
- https://www.tbrc.org/#!footer/news/20151118 -> https://www.bdrc.io/blog/2015/11/18/the-digital-woodblock-reprinting-the-ragya-kanjur-from-tbrc-scans/
- https://www.tbrc.org/#!footer/news/20151028 -> https://www.bdrc.io/blog/2015/10/28/matthieu-ricard-visits-tbrc/
- https://www.tbrc.org/#!footer/news/20150826 -> https://www.bdrc.io/blog/2015/08/08/mindrolling-jetsun-khandro-rinpoche-visits-tbrc/
- https://www.tbrc.org/#!footer/news/20150630 -> https://www.bdrc.io/blog/2015/06/06/tbrc-brings-tibetan-manuscripts-onto-the-google-cultural-institute/
- https://www.tbrc.org/#!footer/news/20150423 -> https://www.bdrc.io/blog/2015/04/23/the-hunt-for-the-ragya-kangyur/
- https://www.tbrc.org/#!footer/news/20150407 -> https://www.bdrc.io/blog/2015/04/07/his-holiness-gyalwang-karmapa-visits-tbrc/
- https://www.tbrc.org/#!footer/news/20150306 -> https://www.bdrc.io/blog/2015/03/06/the-library-of-congress-rockhill-kangyur-release/
- https://www.tbrc.org/#!footer/news/20150220 -> https://www.bdrc.io/blog/2015/02/20/diving-into-the-backlog-bringing-wisdom-to-light/
- https://www.tbrc.org/#!footer/news/20150129 -> https://www.bdrc.io/blog/2015/01/29/tbrc-launches-collaboration-with-soas-to-improve-access-to-tibetan-digital-texts/
- https://www.tbrc.org/#!footer/news/20141219 -> https://www.bdrc.io/blog/2014/12/19/genes-vision-for-tbrc/
- https://www.tbrc.org/#!footer/news/20141216 -> https://www.bdrc.io/blog/2014/12/16/running-out-of-disk-space-as-we-approach-10-million-pages/
- https://www.tbrc.org/#!footer/news/20141215 -> https://www.bdrc.io/blog/2014/12/15/article-about-genes-life-story-published-in-prestigious-chinese-magazine/
- https://www.tbrc.org/#!footer/news/201410291 -> https://www.bdrc.io/blog/2014/10/29/tbrc-talks-a-rule-based-tagger-for-classical-tibetan-tuesday-11-4/
- https://www.tbrc.org/#!footer/news/201410292 -> https://www.bdrc.io/blog/2014/10/29/peter-gruber-in-memoriam/
- https://www.tbrc.org/#!footer/news/20141017 -> https://www.bdrc.io/blog/2014/10/17/remembering-dezhung-rinpoche-and-gene-smith/
- https://www.tbrc.org/#!footer/news/20141008 -> https://www.bdrc.io/blog/2014/10/08/tbrc-talks-scholars-and-scribes-friday-10-10/
- https://www.tbrc.org/#!footer/news/20140924 -> https://www.bdrc.io/blog/2014/09/24/how-to-use-the-tibetan-etext-repository/
- https://www.tbrc.org/#!footer/news/20140915 -> https://www.bdrc.io/blog/2014/09/15/lineage-transmission-research-the-backstory/
- https://www.tbrc.org/#!footer/news/20140909 -> https://www.bdrc.io/blog/2014/09/09/the-lineage-transmission-knowledge-model/
- https://www.tbrc.org/#!footer/news/20140828 -> https://www.bdrc.io/blog/2014/08/28/tibetan-tulku-lines-and-networks/
- https://www.tbrc.org/#!footer/news/20140607 -> https://www.bdrc.io/blog/2014/06/07/tbrc-harvard-partnership-to-support-the-long-term-preservation-of-tibetan-texts/
- https://www.tbrc.org/#!footer/news/20140502 -> https://www.bdrc.io/blog/2014/05/02/tibetan-search-enhancements/
- https://www.tbrc.org/#!footer/news/20140320 -> https://www.bdrc.io/blog/2014/03/20/tbrc-phonetic-tulku-titles/
- https://www.tbrc.org/#!footer/news/20140312 -> https://www.bdrc.io/blog/2014/03/12/the-nyingma-kama-collections/
- https://www.tbrc.org/#!footer/news/20140305 -> https://www.bdrc.io/blog/2014/03/05/tbrc-on-public-radio-international/
- https://www.tbrc.org/#!footer/news/20140220 -> https://www.bdrc.io/blog/2014/02/20/the-impact-of-donations/
- https://www.tbrc.org/#!footer/news/20140216 -> https://www.bdrc.io/blog/2014/02/16/tbrc-in-the-ny-times/
- https://www.tbrc.org/#!footer/news/20140213 -> https://www.bdrc.io/blog/2014/02/13/talk-with-prof-john-dunne/