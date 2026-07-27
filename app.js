const assets = [
  {
    id: "tirzepatide", name: "Tirzepatide", aliases: "LY3298176 · Mounjaro · Zepbound", company: "Eli Lilly",
    phase: "승인 + 적응증 확장", stage: 4, tier: "core", tone: "live",
    mechanism: "GLP-1R/GIP 계열",
    signal: "SURMOUNT-1 72주 −22.5%(15 mg). GIP 축 최초 상업화이자 비만 효능 기준선.",
    origin: "Eli Lilly가 개발한 GIP/GLP-1 이중 작용 펩타이드. 비만·T2D에서 먼저 승인됐다.",
    strategy: "GIP 축 벤치마크. 신규 물질의 효능·내약성은 사실상 이 값과 비교된다.",
    watch: ["SURMOUNT-MMO(NCT05556512) 심혈관 결과", "소아·청소년 확장 시험", "경구 대안과의 경쟁"],
    source: "https://clinicaltrials.gov/study/NCT04184622"
  },
  {
    id: "enicepatide", name: "Enicepatide", aliases: "CT-388", company: "Roche (Carmot)",
    phase: "Phase 2 완료 → Phase 3 Enith", stage: 3, tier: "core", tone: "live",
    mechanism: "GLP-1R/GIP 계열",
    signal: "Phase 2 48주 위약보정 −22.5%(24 mg). 2026 Q1 Phase 3 Enith 개시.",
    origin: "Carmot Therapeutics의 CT-388. Roche가 2024년 Carmot을 인수하며 확보했다. INN은 enicepatide.",
    strategy: "빅파마 중 GIP 축 후발 주자. petrelintide 병용(NCT07589686)으로 amylin 축과도 연결된다.",
    watch: ["Enith1(NCT07351045)·Enith2 Phase 3 진행", "petrelintide 병용 Phase 2 결과", "CT.gov Results 게시 여부"],
    source: "https://www.roche.com/media/releases/med-cor-2026-01-27"
  },
  {
    id: "vk2735", name: "VK2735", aliases: "—", company: "Viking Therapeutics",
    phase: "Phase 3 VANQUISH (SC) · Phase 2 완료 (경구)", stage: 3, tier: "core", tone: "live",
    mechanism: "GLP-1R/GIP 계열",
    signal: "VENTURE 13주 −14.7%(15 mg). 피하·경구 두 제형을 병행한다.",
    origin: "Viking Therapeutics가 자체 개발한 GLP-1/GIP 이중작용제.",
    strategy: "GIP 축에서 단계가 가장 앞선 비(非)빅파마. 경구 제형이 차별점이다.",
    watch: ["VANQUISH-1(NCT07104500) 78주 결과 2027 예상", "VANQUISH-2(NCT07104383) T2D", "경구 Phase 3 진입 여부"],
    source: "https://pubmed.ncbi.nlm.nih.gov/41508550/"
  },
  {
    id: "ribupatide", name: "Ribupatide", aliases: "HRS9531 · KAI-9531", company: "Hengrui / Kailera",
    phase: "Phase 3 (주사·중국) · Phase 2 완료 (경구)", stage: 3, tier: "core", tone: "live",
    mechanism: "GLP-1R/GIP 계열",
    signal: "경구 26주 −12.1%(25 mg). 주사·경구 모두 Phase 3 단계로 이동 중.",
    origin: "Hengrui(Fujian Shengdi)가 개발. Kailera가 중국 외 글로벌 권리를 확보했다.",
    strategy: "중국발 GIP 축 물질. 경구 제형에서 GI로 인한 영구 중단이 보고되지 않았다.",
    watch: ["KaiNETIC-1(NCT07284875) 글로벌 Phase 3", "주사 Phase 3(NCT07285902)", "경구 Phase 3 중국 진입"],
    source: "https://www.hengrui.com/en/media/detail-968.html"
  },
  {
    id: "maritide", name: "MariTide", aliases: "maridebart cafraglutide · AMG 133", company: "Amgen",
    phase: "Phase 3 MARITIME", stage: 3, tier: "core", tone: "live",
    mechanism: "GLP-1R/GIP 계열",
    signal: "Phase 2 52주 −12.3~−16.2%. 월 1회 투여. ★GIP를 길항한다(작용 방향이 반대).",
    origin: "Amgen이 항GIPR 단일클론항체에 GLP-1 유사체 2개를 접합한 이중특이 분자(AMG 133).",
    strategy: "GIP 작용제와 정반대 방향인데도 체중이 감소한다. 축은 같지만 기전 해석은 분리해서 봐야 한다.",
    watch: ["MARITIME-CV(NCT07037433) n=12800 심혈관", "OSA Phase 3(NCT07225686)", "월 1회 투여의 실제 순응도"],
    source: "https://pubmed.ncbi.nlm.nih.gov/40549887/"
  },
  {
    id: "mazdutide", name: "Mazdutide", aliases: "IBI362 · LY3305677 · OXM3", company: "Innovent / Eli Lilly",
    phase: "승인 + Phase 3 확장", stage: 4, tier: "core", tone: "live",
    mechanism: "GLP-1R/GCGR dual",
    signal: "중국 체중관리·T2D 승인. GLORY-2 9 mg에서 60주 전체 efficacy estimand −18.55%.",
    origin: "Lilly가 개발한 oxyntomodulin 유사체. Innovent가 중국 개발·상업화 권리를 확보했다.",
    strategy: "클래스 최초 상업화 benchmark. OSA, MASH, 청소년, 고혈압, HFpEF와 고용량으로 확장 중.",
    watch: ["2026 Q3: 15 mg·HFpEF primary completion", "2027 Q2: GLORY-OSA completion", "2027 Q3: MASH study completion"],
    source: "https://en.innoventbio.com/InvestorsAndMedia/PressReleaseDetail?key=562"
  },
  {
    id: "survodutide", name: "Survodutide", aliases: "BI 456906", company: "Boehringer Ingelheim / Zealand Pharma",
    phase: "Phase 3", stage: 3, tier: "core", tone: "live",
    mechanism: "GLP-1R/GCGR dual",
    signal: "SYNCHRONIZE-1 76주 efficacy estimand 최대 −16.6%. GI AE 중단 약 19%가 핵심 부담.",
    origin: "Zealand와 BI가 공동 발명. 2011년 협업에서 BI가 글로벌 개발·상업화 권리를 확보했다.",
    strategy: "글로벌 비만·MASH 후기개발을 동시에 보유한 가장 큰 임상 위협.",
    watch: ["2027 Q1: 기전시험 completion", "2029 Q2: LIVERAGE-Cirrhosis completion", "2031 Q4: LIVERAGE F2–F3 completion"],
    source: "https://www.zealandpharma.com/pipeline/survodutide/"
  },
  {
    id: "pemvidutide", name: "Pemvidutide", aliases: "ALT-801 · SP-1373", company: "Altimmune",
    phase: "Phase 2b → Phase 3 준비", stage: 2.55, tier: "core", tone: "live",
    mechanism: "GLP-1R/GCGR dual",
    signal: "MOMENTUM 48주 −15.6%. MASH·AUD·ALD로 적응증을 넓히며 PERFORMA Phase 3를 준비.",
    origin: "Spitfire Pharma의 SP-1373. Altimmune이 2019년 Spitfire를 인수한 뒤 ALT-801, pemvidutide로 전환했다.",
    strategy: "DA-1726의 MetALD 방향과 가장 가까운 적응증 경쟁자.",
    watch: ["2026 H2: PERFORMA Phase 3 개시 계획", "2027 Q3: RESTORE ALD completion", "RECLAIM AUD 결과 공개 일정"],
    source: "https://ir.altimmune.com/news-releases/news-release-details/altimmune-announces-first-quarter-2026-financial-results-and"
  },
  {
    id: "efino", name: "Efinopegdutide", aliases: "MK-6024 · HM12525A · JNJ-64565111", company: "Merck / Hanmi",
    phase: "Phase 2", stage: 2.25, tier: "core", tone: "live",
    mechanism: "GLP-1R/GCGR dual",
    signal: "24주 체중 −8.5%; semaglutide 대비 간지방 감소 우위. MASH·보상성 간경변 집중.",
    origin: "Hanmi LAPSCOVERY 자산. Janssen 반환 후 2020년 Merck가 글로벌 독점 라이선스했다.",
    strategy: "체중보다 간 직접효과와 간경변 개발의 대형제약 benchmark.",
    watch: ["2026 Q3: 보상성 간경변 P2 completion", "MASH 조직학 결과", "Merck의 후기개발 전환"],
    source: "https://www.merck.com/research/product-pipeline/"
  },
  {
    id: "azd9550", name: "AZD9550", aliases: "—", company: "AstraZeneca",
    phase: "Phase 2", stage: 2.15, tier: "core", tone: "live",
    mechanism: "GLP-1R/GCGR dual",
    signal: "ASCEND Phase 2가 2026년 5월 완료됐으나 결과 미공개. AZD6234 amylin 병용도 탐색.",
    origin: "AstraZeneca 내부 개발 자산. 공개된 외부 라이선스 이력은 확인되지 않았다.",
    strategy: "결과가 아직 보이지 않는 near-term blind spot. 단독과 amylin 병용을 동시에 검증한다.",
    watch: ["ASCEND 결과 공개 일정 미정", "2027 Q1: CONTEMPO completion", "후속 Phase 2/3 선택"],
    source: "https://www.astrazenecaclinicaltrials.com/study/D8460C00004/"
  },
  {
    id: "dd01", name: "Zabopegdutide", aliases: "DD01", company: "D&D Pharmatech",
    phase: "Phase 2 완료", stage: 2, tier: "core", tone: "live",
    mechanism: "GLP-1R/GCGR dual",
    signal: "48주 조직학: 섬유화 개선 50.0% vs 15.8%, MASH 해소 62.5% vs 5.3% (소규모 PP).",
    origin: "D&D Pharmatech 자체 개발 장기지속형 자산. 중국 비만 권리는 Shenzhen Salubris에 이전.",
    strategy: "국내 기원 MASH 신호와 중국 비만 확장을 가진 직접 비교자. 다음 글로벌 시험은 미등록.",
    watch: ["후속 임상 등록", "평균 체중변화 공개", "글로벌 기술이전·중국 개발 진행"],
    source: "https://ddpharmatech.com/en/board/board.php?bo_table=press_en&idx=20"
  },
  {
    id: "cms", name: "CMS-D005", aliases: "—", company: "China Medical System",
    phase: "China Phase 1", stage: 1.15, tier: "watch", tone: "watch",
    mechanism: "GLP-1R/GCGR dual",
    signal: "중국 Phase 1 진행이 HKEX 공시로 확인되지만 공개 임상·약리 데이터는 제한적.",
    origin: "China Medical System 자체 개발 자산.",
    strategy: "ClinicalTrials.gov에 잡히지 않는 중국 레지스트리 사각지대.",
    watch: ["China Phase 1 결과", "공식 등록번호·용량", "비만 또는 MASH 후속 적응증"],
    source: "https://web.cms.net.cn/en/2024/11/ind-approval-cmss-self-developed-innovative-drug-dual-agonist-of-glucagon-like-peptide-1-receptor-glucagon-receptor-cms-d005-is-approved-for-drug-clinical-trials/"
  },
  {
    id: "da1726", name: "DA-1726", aliases: "—", company: "Dong-A ST / MetaVia",
    phase: "Phase 1 Part 3", stage: 1.45, tier: "core", tone: "internal",
    mechanism: "GLP-1R/GCGR dual",
    signal: "비적정 48 mg, n=6에서 Day 54 −9.1%. Part 3는 적정 48/64 mg 목표용량을 검증 중.",
    origin: "Dong-A ST 개발. 2022년 NeuroBo(현 MetaVia)가 한국 제외 글로벌 권리를 라이선스했다.",
    strategy: "내부 기준자산. 후기 경쟁력의 관문은 적정 후 목표용량 도달률과 GI 중단률.",
    watch: ["2026 Q4: FIH 등록상 completion", "Part 3 적정 48/64 mg 데이터", "표본 확대 내약성·MetALD 전략"],
    source: "https://www.sec.gov/Archives/edgar/data/1638287/000110465926082116/tm2620006d1_8k.htm"
  },
  {
    id: "pb718", name: "PB-718", aliases: "PB-119 + PB-722", company: "PegBio",
    phase: "Phase 1/2 완료 · 전략 검토", stage: 1.8, tier: "watch", tone: "watch",
    mechanism: "GLP-1R+GCGR fixed-combo",
    signal: "두 작용제의 고정용량 복합제. 최신 등록시험 완료 후 후속 전략을 평가 중.",
    origin: "PegBio의 GLP-1RA PB-119와 GCGR agonist PB-722를 조합한 제품.",
    strategy: "동일 수용체쌍의 대체 아키텍처지만 unimolecular class와 직접 동급 비교하지 않는다.",
    watch: ["개발 재개·우선순위 결정", "후속 임상 등록", "고정비율의 차별성"],
    source: "https://diabetesjournals.org/diabetes/article/73/Supplement_1/768-P/156358/768-P-A-Phase-1b-2a-Trial-to-Assess-the-Safety"
  },
  {
    id: "cotadutide", name: "Cotadutide", aliases: "MEDI0382", company: "AstraZeneca / MedImmune",
    phase: "중단", stage: 2, tier: "historical", tone: "watch",
    mechanism: "GLP-1R/GCGR dual",
    signal: "T2D·비만·NASH에서 Phase 2 신호를 만들었으나 현재 파이프라인에서 제외.",
    origin: "MedImmune/AstraZeneca의 균형형 GLP-1R/GCGR co-agonist.",
    strategy: "사람 POC가 있어도 포트폴리오 선택과 후기개발성이 별개임을 보여준다.",
    watch: ["중단 사유의 공개 한계", "논문 데이터의 class reference 활용"],
    source: "https://clinicaltrials.gov/search?term=cotadutide"
  },
  {
    id: "nn1177", name: "NN1177", aliases: "NNC9204-1177", company: "Novo Nordisk",
    phase: "중단", stage: 1, tier: "historical", tone: "watch",
    mechanism: "GLP-1R/GCGR dual",
    signal: "Phase 1에서 체중감량 신호와 함께 내약성·심박수·혈당 우려가 나타나 개발 중단.",
    origin: "Novo Nordisk 내부 oxyntomodulin 계열 자산.",
    strategy: "GCGR 비중과 치료창 설계가 초기 임상의 존속을 결정하는 대표 사례.",
    watch: ["공개 Phase 1 논문의 정량적 safety benchmark"],
    source: "https://clinicaltrials.gov/search?term=NNC9204-1177"
  },
  {
    id: "sar425899", name: "SAR425899", aliases: "—", company: "Sanofi",
    phase: "중단", stage: 1, tier: "historical", tone: "watch",
    mechanism: "GLP-1R/GCGR dual",
    signal: "Phase 1에서 혈당·체중 신호를 보였으나 후속 임상개발이 이어지지 않았다.",
    origin: "Sanofi 내부 개발 GLP-1R/GCGR dual agonist.",
    strategy: "초기 약리효능만으로 자산의 후기 경쟁력이 성립하지 않는 사례.",
    watch: ["기존 비교자; 현재 개발 신호 없음"],
    source: "https://clinicaltrials.gov/search?term=SAR425899"
  },
  {
    id: "opk88003", name: "Pegapamodutide", aliases: "OPK-88003 · MOD-6031", company: "OPKO Health",
    phase: "휴면/중단", stage: 1, tier: "historical", tone: "watch",
    mechanism: "GLP-1R/GCGR dual",
    signal: "주 1회 dual agonist로 사람 임상에 진입했지만 후속 활성 개발 근거가 없다.",
    origin: "OPKO의 장기지속형 oxyntomodulin 기반 자산.",
    strategy: "등록시험 완료와 개발 지속은 같은 의미가 아니라는 사례.",
    watch: ["공식 파이프라인 복귀 여부"],
    source: "https://clinicaltrials.gov/search?term=OPK-88003"
  },
  {
    id: "g3215", name: "G3215", aliases: "—", company: "Gubra",
    phase: "임상 1상 이후 비활성", stage: 1, tier: "historical", tone: "watch",
    mechanism: "GLP-1R/GCGR dual",
    signal: "초기 임상 진입 기록 이후 현재 활성 개발을 뒷받침하는 공개 신호가 제한적.",
    origin: "Gubra peptide discovery 자산.",
    strategy: "공개정보 공백이 큰 자산은 중단과 미공개를 구분해 관리해야 한다.",
    watch: ["현재 권리자·개발 상태 확인 필요"],
    source: "https://clinicaltrials.gov/search?term=G3215"
  },
  {
    id: "retatrutide", name: "Retatrutide", aliases: "LY3437943 · 레타트루타이드", company: "Eli Lilly",
    phase: "Phase 3", stage: 3.5, tier: "core", tone: "live",
    mechanism: "GLP-1R/GIP/GCGR triple",
    signal: "TRIUMPH-1(n=2339) efficacy 12 mg −28.3% / treatment-regimen −25.0%. 오심 12 mg 42.4%, AE 중단 11.3%.",
    origin: "Lilly 내부 개발 단일분자 triple agonist (GLP-1R·GIP·GCGR).",
    strategy: "비만 후기 개발 최전선. dual 대비 체중 상한이 더 높은 벤치마크.",
    watch: ["TRIUMPH 프로그램 추가 결과", "규제 제출 일정", "T2D·OA·OSA 서브시험"],
    source: "https://investor.lilly.com/news-releases/news-release-details/lillys-triple-agonist-retatrutide-delivered-powerful-weight-loss"
  },
  {
    id: "cagrisema", name: "CagriSema", aliases: "cagrilintide + semaglutide · 카그리세마", company: "Novo Nordisk",
    phase: "Phase 3", stage: 3.3, tier: "core", tone: "live",
    mechanism: "GLP-1R + amylin fixed-combo",
    signal: "REDEFINE 1(n=3417) trial-product −22.7% vs 위약 −2.3%. GI AE 79.6%, AE 중단 6%.",
    origin: "Novo의 amylin 유사체 cagrilintide와 semaglutide 2.4 mg 고정용량 복합.",
    strategy: "GLP-1 단독 대비 병용 시너지. tirzepatide 직접 비교(REDEFINE 4)도 공개.",
    watch: ["규제 경로", "REDEFINE 4 vs tirzepatide 해석", "최고 용량 도달률"],
    source: "https://www.nejm.org/doi/full/10.1056/NEJMoa2502081"
  },
  {
    id: "zenagamtide", name: "Zenagamtide", aliases: "amycretin · 제나감타이드 · NN9487", company: "Novo Nordisk",
    phase: "Phase 2 → Phase 3 준비", stage: 2.35, tier: "core", tone: "live",
    mechanism: "GLP-1R + amylin unimolecular",
    signal: "SC P1b/2a 60 mg 36주 −24.3% (Lancet). T2D P2 체중 최대 −14.6% (회사 ADA 2026).",
    origin: "Novo 단일분자 GLP-1R/amylin dual. 과거 amycretin으로 알려짐.",
    strategy: "CagriSema 뒤를 잇는 unimolecular amylin 축. 경구 옵션이 차별 포인트.",
    watch: ["비만 Phase 3 개시", "경구 용량 확정", "T2D Phase 2 후속"],
    source: "https://pubmed.ncbi.nlm.nih.gov/40550231/"
  },
  {
    id: "eloralintide", name: "Eloralintide", aliases: "LY3841136 · 엘로라니타이드", company: "Eli Lilly",
    phase: "Phase 2 완료 · Phase 3 준비", stage: 2.2, tier: "core", tone: "live",
    mechanism: "amylin selective",
    signal: "P2 NCT06230523: 9 mg −20.1% (CT.gov). 오심 6 mg 64.3%. AE 중단 6 mg 21% · 풀링 10% (Lancet).",
    origin: "Lilly 선택적 amylin 수용체 작용제. 주 1회 피하.",
    strategy: "GLP-1 비함유 amylin 단독 축. 병용·순차 전략 확장 여지.",
    watch: ["Phase 3 ENLIGHTEN 등 등록", "병용 전략 공개", "GI·피로 AE 프로파일"],
    source: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)02155-5/abstract"
  },
  {
    id: "petrelintide", name: "Petrelintide", aliases: "ZP8396 · 페트렐린타이드", company: "Zealand Pharma / Roche",
    phase: "Phase 2 완료 · Phase 3 예정", stage: 2.45, tier: "core", tone: "live",
    mechanism: "amylin long-acting (DACRA)",
    signal: "ZUPREME-1(n=493) 42주 efficacy 최대 −10.7% vs 위약 −1.7% (Roche PR). AE 중단 4.8% vs 4.9%.",
    origin: "Zealand 장기 amylin 유사체. 2025 Roche 공동개발·상업화.",
    strategy: "amylin 단독 축에서 내약(구토·GI 중단) 차별. 병용(CT-388 등)도 탐색.",
    watch: ["P3 개시(2026 하반기 계획)", "ZUPREME-2 T2D 결과", "CT.gov Results 게시"],
    source: "https://www.roche.com/media/releases/med-cor-2026-03-05"
  },
  {
    id: "azd6234", name: "AZD6234", aliases: "—", company: "AstraZeneca",
    phase: "Phase 2", stage: 2.15, tier: "core", tone: "live",
    mechanism: "amylin selective (SARA)",
    signal: "P2 APRICUS·병용 프로그램 진행. 공개 토플라인 % 체중은 감사 시점 미확보. AZD9550 병용(ASCEND) 연계.",
    origin: "AstraZeneca 주 1회 선택적 amylin 수용체 작용제(SARA).",
    strategy: "단독 amylin + dual(AZD9550) 병용으로 포트폴리오 확장. incretin 불내성 대체 축.",
    watch: ["APRICUS P2 결과 공개", "ASCEND 병용 결과", "용량·제형 확정"],
    source: "https://clinicaltrials.gov/study/NCT06595238"
  },
  {
    id: "cagrilintide", name: "Cagrilintide", aliases: "AM833 · NNC0174-0833 · 카그릴린타이드", company: "Novo Nordisk",
    phase: "Phase 3 (단독 프로그램)", stage: 3.1, tier: "core", tone: "live",
    mechanism: "amylin long-acting",
    signal: "P2 26주 4.5 mg −10.8% vs 위약 −3.0% (CT.gov). REDEFINE 1 단독 암 trial-product −11.8% (68주).",
    origin: "Novo 장기 amylin 유사체. CagriSema 구성 성분 · 단독 개발 병행.",
    strategy: "복합(CagriSema)과 분리된 단독 amylin 벤치마크. P3 단독 시험 진행.",
    watch: ["단독 P3 결과", "CagriSema 규제와 단독 포지셔닝", "GI 프로파일 비교"],
    source: "https://pubmed.ncbi.nlm.nih.gov/34798060/"
  }
];

const events = [
  {year: 2011, asset: "Survodutide", sub: "Zealand × BI", type: "deal", title: "장기 파트너십이 자산의 토대가 되다", text: "Zealand와 Boehringer Ingelheim이 T2D·비만용 glucagon/GLP-1 이중작용제 협업을 체결. BI가 선도물질의 글로벌 개발·상업화 권리를 확보했다."},
  {year: 2015, asset: "Efinopegdutide", sub: "HM12525A", type: "deal", title: "Hanmi 자산, Janssen으로 이전", text: "LAPSCOVERY 기반 자산이 글로벌 개발 체계에 진입했다. 이후 권리가 반환되며 한 차례 전략적 리셋을 겪는다."},
  {year: 2016, asset: "SAR425899", sub: "Sanofi", type: "clinical", title: "초기 사람 POC 확보", text: "Phase 1에서 혈당과 체중 신호를 관찰했지만 후기 개발로 이어지지 않았다."},
  {year: 2017, asset: "Cotadutide", sub: "MEDI0382", type: "clinical", title: "T2D 환자 임상으로 class POC 확장", text: "MedImmune/AstraZeneca가 혈당·체중·간 대사 가능성을 검증하며 이후 NASH 개발의 근거를 쌓았다."},
  {year: 2019, asset: "Pemvidutide", sub: "SP-1373 → ALT-801", type: "deal", title: "Altimmune, Spitfire Pharma 인수", text: "전임상 자산 SP-1373을 포함해 약 500만 달러 주식 선급 대가로 인수. ALT-801로 이름을 바꾸고 임상 진입을 준비했다."},
  {year: 2019, asset: "Efinopegdutide", sub: "JNJ-64565111", type: "stop", title: "Janssen 권리 반환", text: "이전 파트너십이 종료됐지만 자산은 소멸하지 않았고, 간질환 중심으로 재포지셔닝될 기회를 얻었다."},
  {year: 2020, asset: "Efinopegdutide", sub: "MK-6024", type: "deal", title: "Merck, 글로벌 독점 라이선스", text: "Merck가 Hanmi에 선급 1,000만 달러, 최대 8.6억 달러 마일스톤 조건으로 도입. NASH에 초점을 맞췄다."},
  {year: 2020, asset: "Cotadutide", sub: "Phase 2", type: "data", title: "간·대사 다중효과의 임상 신호", text: "T2D/비만 환자에서 체중·혈당·간 관련 지표 개선이 보고돼 liver-focused dual agonism의 초기 benchmark가 됐다."},
  {year: 2021, asset: "Pemvidutide", sub: "ALT-801", type: "clinical", title: "Phase 1 임상 신호로 전임상 자산 탈피", text: "사람 대상에서 체중과 간지방 감소 신호를 확보하며 비만과 NASH 병렬 개발 논리가 형성됐다."},
  {year: 2021, asset: "NN1177", sub: "NNC9204-1177", type: "stop", title: "치료창 문제로 개발 중단", text: "체중감량에도 불구하고 GI 내약성, 심박수 증가, 고혈당·혈당조절 지표 우려가 class 설계 리스크를 선명하게 드러냈다."},
  {year: 2022, asset: "DA-1726", sub: "Dong-A ST → NeuroBo", type: "deal", title: "한국 제외 글로벌 권리 이전", text: "2022년 9월 계약, 11월 발효. NeuroBo가 비만·MASH 개발권을 확보하고 Dong-A가 임상·초기 상업 물량 제조를 맡았다."},
  {year: 2022, asset: "Pemvidutide", sub: "MOMENTUM", type: "clinical", title: "Phase 2 비만 시험 개시", text: "비당뇨 과체중·비만 성인 391명을 대상으로 48주 체중효능과 안전성을 평가했다."},
  {year: 2023, asset: "Efinopegdutide", sub: "Phase 2a", type: "data", title: "체중보다 강한 간지방 차별화", text: "24주 체중변화 −8.5% vs semaglutide −7.1%. 체중차가 작아도 간지방 감소에서 더 큰 효과를 보이며 간 중심 포지션을 강화했다."},
  {year: 2023, asset: "Survodutide", sub: "SYNCHRONIZE", type: "clinical", title: "글로벌 Phase 3 프로그램 진입", text: "비만 후기개발과 MASH 개발을 병렬화하며 class의 글로벌 선두로 이동했다."},
  {year: 2023, asset: "Mazdutide", sub: "GLORY / DREAMS", type: "clinical", title: "중국 Phase 3 다적응증 확대", text: "비만과 T2D를 중심으로 semaglutide·dulaglutide 비교 및 대사 동반질환 시험군을 구축했다."},
  {year: 2024, asset: "DA-1726", sub: "NCT06252220", type: "clinical", title: "First-in-human Phase 1 개시", text: "비만 성인에서 SAD/MAD를 통해 안전성·PK·체중변화를 평가하는 임상 단계에 진입했다."},
  {year: 2024, asset: "Zabopegdutide", sub: "FDA Fast Track", type: "regulatory", title: "MASH Fast Track 지정", text: "초기 간지방 감소 신호를 바탕으로 미국 FDA의 신속개발 지원 대상으로 지정됐다."},
  {year: 2024, asset: "Zabopegdutide", sub: "China rights", type: "deal", title: "중국 비만 개발권 Salubris로 확장", text: "중국 파트너가 비만 대상 Phase 1 IND 승인을 확보해 미국 MASH와 중국 비만의 이중 경로가 만들어졌다."},
  {year: 2024, asset: "PB-718", sub: "NCT06147544", type: "data", title: "고정용량 조합의 초기 임상 완료", text: "PB-119 GLP-1RA와 PB-722 GCGR agonist의 조합으로 동일 수용체쌍을 구현. 단일분자와 다른 개발 아키텍처다."},
  {year: 2024, asset: "CMS-D005", sub: "China IND", type: "regulatory", title: "중국 임상시험 승인", text: "CMS 자체 개발 이중작용제가 중국 Phase 1에 진입. 글로벌 레지스트리만 검색할 때 누락될 수 있는 자산이다."},
  {year: 2024, asset: "Pemvidutide", sub: "MOMENTUM", type: "data", title: "48주 −15.6% 체중감량", text: "2.4 mg에서 위약 −2.2% 대비 평균 −15.6%. 모든 AE 중단 19.6%로 효능과 유지율을 함께 읽어야 한다."},
  {year: 2025, asset: "Mazdutide", sub: "NMPA", type: "regulatory", title: "중국 체중관리 승인", text: "2025년 6월 과체중·비만 성인의 만성 체중관리로 승인되며 GLP-1R/GCGR class의 상업적 검증을 달성했다."},
  {year: 2025, asset: "Mazdutide", sub: "NMPA", type: "regulatory", title: "중국 T2D 승인", text: "같은 해 혈당조절 적응증까지 확보해 비만·당뇨 양축 제품으로 전환했다."},
  {year: 2025, asset: "AZD9550", sub: "ASCEND", type: "clinical", title: "대규모 Phase 2 검증", text: "377명 규모에서 체중·대사 효능을 검증. 별도 CONTEMPO에서 단독 고용량과 AZD6234 amylin 병용을 시험했다."},
  {year: 2026, asset: "DA-1726", sub: "48 mg MAD", type: "data", title: "비적정 소수 코호트에서 −9.1%", text: "n=6, Day 54 기준 초기 체중 신호. GI disorders 5/6, 구토 5/6이나 치료관련 중단은 없었다. 작은 분모를 후기 임상과 직접 비교할 수 없다."},
  {year: 2026, asset: "Survodutide", sub: "SYNCHRONIZE-1", type: "data", title: "Phase 3 최대 −16.6%, GI 유지율이 쟁점", text: "76주 efficacy estimand 최대 −16.6%. 전체 GI AE 80.9–89.7%, GI AE 중단 약 19%가 후기 benchmark를 형성했다."},
  {year: 2026, asset: "Zabopegdutide", sub: "NCT06410924", type: "data", title: "48주 조직학 POC", text: "소규모 per-protocol 분석에서 섬유화 개선 50.0% vs 15.8%, MASH 해소 62.5% vs 5.3%. 다음 등록시험은 아직 확인되지 않았다."},
  {year: 2026, asset: "AZD9550", sub: "ASCEND", type: "clinical", title: "Phase 2 완료, 결과 대기", text: "2026년 5월 시험은 완료됐으나 공개 결과가 없어 클래스의 가장 큰 단기 정보 공백 중 하나다."},
  {year: 2026, asset: "DA-1726", sub: "Part 3", type: "clinical", title: "적정 48/64 mg 목표용량 검증", text: "활성 환자들이 목표용량에 도달. 효능보다 목표용량 도달률, GI 발생·중단, 표본 확대 시 재현성이 다음 관문이다."},
  {year: 2026, asset: "Pemvidutide", sub: "PERFORMA", type: "clinical", title: "MASH Phase 3 전환 계획", text: "Altimmune은 2026년 하반기 PERFORMA 개시를 계획. AUD·ALD 임상과 함께 간질환 프랜차이즈를 구축한다."},
  {year: 2025, asset: "CagriSema", sub: "REDEFINE 1", type: "data", title: "Phase 3 비만 −22.7%", text: "비당뇨 비만·과체중에서 68주 trial-product estimand CagriSema −22.7%, semaglutide −16.1%, cagrilintide −11.8%, 위약 −2.3%."},
  {year: 2025, asset: "Zenagamtide", sub: "amycretin SC", type: "data", title: "비만 SC 36주 −24.3%", text: "Phase 1b/2a에서 주 1회 SC 최대 60 mg, 36주 평균 체중 −24.3% vs 위약 −1.1% (Lancet)."},
  {year: 2025, asset: "Eloralintide", sub: "Phase 2", type: "data", title: "amylin 단독 48주 최대 −20%", text: "비만·과체중 Phase 2에서 9 mg efficacy estimand 약 −20% vs 위약 −0.4%. Lancet·ObesityWeek 2025."},
  {year: 2021, asset: "Cagrilintide", sub: "Phase 2", type: "data", title: "단독 26주 최대 −10.8%", text: "비당뇨 과체중·비만 Phase 2에서 4.5 mg −10.8% vs 위약 −3.0% (trial product·CT.gov)."},
  {year: 2025, asset: "Petrelintide", sub: "Roche 계약", type: "deal", title: "Zealand–Roche 공동개발", text: "과체중·비만 petrelintide 공동개발·상업화 독점 계약. Roche가 후기 개발 파트너로 합류."},
  {year: 2026, asset: "Petrelintide", sub: "ZUPREME-1", type: "data", title: "P2 42주 최대 −10.7%", text: "Roche 토플라인: efficacy estimand 최대 −10.7% vs 위약 −1.7%. AE 중단 4.8% vs 4.9%. P3 2026 하반기 계획."},
  {year: 2025, asset: "AZD6234", sub: "APRICUS", type: "clinical", title: "단독 Phase 2 진행", text: "비만·과체중+동반질환 P2(NCT06595238). AZD9550 병용 ASCEND와 포트폴리오 연계."},
  {year: 2025, asset: "Cagrilintide", sub: "REDEFINE 1 단독 암", type: "data", title: "P3 프로그램 내 단독 −11.8%", text: "REDEFINE 1에서 cagrilintide 2.4 mg 단독 trial-product 68주 −11.8% vs 위약 −2.3% (CagriSema 구성 암)."},
  {year: 2025, asset: "Retatrutide", sub: "TRIUMPH-4", type: "data", title: "OA 동반 비만 Phase 3 체중 신호", text: "68주 12 mg 평균 약 −28.7% 체중 감소 등 회사 공개 topline (OA 통증 개선 포함)."},
  {year: 2026, asset: "Retatrutide", sub: "TRIUMPH-1", type: "data", title: "비만 Phase 3 80주 −28.3%", text: "비당뇨 비만·과체중 TRIUMPH-1에서 12 mg 80주 평균 −28.3%, BMI≥35 연장 104주 −30.3%."},
  {year: 2026, asset: "Zenagamtide", sub: "ADA 2026 T2D", type: "data", title: "T2D Phase 2 A1C·체중", text: "T2D 대상 SC Phase 2에서 A1C 유의 감소와 체중 최대 약 −14.6% (회사 ADA 2026 공개)."}
];

// null은 공개 근거에서 분기까지 확정하지 못한 이벤트다. 임의 추정하지 않고 연도 전체 밴드로 표시한다.
const eventQuarterHints = [
  2, 4, null, null, 3, null, 3, null, null, null,
  3, 2, 2, 3, null, 1, 1, 4, 2, 4,
  null, 2, 3, null, 1, 2, 2, 2, 3, null,
  // CagriSema, Zenagamtide, Eloralintide, Retatrutide TRIUMPH-4, TRIUMPH-1, Zenagamtide T2D
  2, null, 4, 4, 2, 2
];
events.forEach((event, index) => { event.quarter = eventQuarterHints[index]; });

// 기준일(2026-07-23) 이후 일정. 등록시험의 날짜는 예상치이며 결과 공개일과 같지 않다.
events.push(
  {year: 2026, quarter: 3, asset: "Efinopegdutide", sub: "NCT06465186 · 등록상 예상", type: "future", title: "보상성 간경변 Phase 2 완료 예정", text: "ClinicalTrials.gov 등록상 primary/study completion은 2026-08-06이다. 일정은 변경될 수 있으며 결과 공개일을 뜻하지 않는다."},
  {year: 2026, quarter: 3, asset: "Mazdutide", sub: "NCT07000955 · 등록상 예상", type: "future", title: "15 mg 내약성·PK primary completion", text: "중등도~중증 비만 대상 15 mg 시험의 등록상 primary completion은 2026-09-30, study completion은 2027-05-14이다."},
  {year: 2026, quarter: 3, asset: "Mazdutide", sub: "NCT06862908 · 등록상 예상", type: "future", title: "비만 동반 HFpEF/HFmrEF primary completion", text: "등록상 primary completion은 2026-09-24, study completion은 2027-02-11이다."},
  {year: 2026, qStart: 3, qSpan: 2, asset: "Pemvidutide", sub: "PERFORMA · 회사 계획", type: "future", title: "MASH Phase 3 개시 계획", text: "Altimmune은 PERFORMA Phase 3를 2026년 하반기에 시작할 계획이라고 밝혔다. 기준일 현재 확정 등록일정이 아닌 회사 계획이다."},
  {year: 2026, quarter: 4, asset: "DA-1726", sub: "NCT06252220 · 등록상 예상", type: "future", title: "First-in-human Phase 1 완료 예정", text: "ClinicalTrials.gov 등록상 primary/study completion은 2026-11-09이다. Part 3 적정 48/64 mg 데이터 공개일은 별도 확정되지 않았다."},
  {year: 2026, quarter: 4, asset: "Mazdutide", sub: "NCT06884293 · 등록상 예상", type: "future", title: "GLORY-3 primary completion", text: "Mazdutide와 semaglutide를 비교하는 MAFLD 동반 비만 시험의 등록상 primary completion은 2026-12-31, completion은 2027-06-30이다."},
  {year: 2026, quarter: 4, asset: "Survodutide", sub: "NCT05202353 · 등록상 예상", type: "future", title: "간 GCGR 활성 기전시험 primary completion", text: "Semaglutide 비교 간 glucagon receptor activity 시험의 등록상 primary completion은 2026-12-02, completion은 2027-01-01이다."},
  {year: 2027, quarter: 1, asset: "AZD9550", sub: "CONTEMPO · NCT06151964", type: "future", title: "단독·AZD6234 병용시험 완료 예정", text: "등록상 primary/study completion은 2027-01-29이다. 단독 고용량과 amylin analogue AZD6234 병용을 평가한다."},
  {year: 2027, quarter: 1, asset: "Survodutide", sub: "NCT06745284 · 등록상 예상", type: "future", title: "에너지 사용·지방대사 기전시험 완료", text: "등록상 study completion은 2027-01-10이다."},
  {year: 2027, quarter: 1, asset: "Mazdutide", sub: "NCT06862908 · 등록상 예상", type: "future", title: "HFpEF/HFmrEF 동반 비만 시험 완료", text: "등록상 study completion은 2027-02-11이다."},
  {year: 2027, quarter: 2, asset: "Mazdutide", sub: "NCT07469800 · 등록상 예상", type: "future", title: "고혈압 동반 비만 시험 완료", text: "등록상 study completion은 2027-04-15이다."},
  {year: 2027, quarter: 2, asset: "Mazdutide", sub: "NCT06931028 · GLORY-OSA", type: "future", title: "OSA Phase 3 primary·study completion", text: "등록상 primary completion은 2027-05-07, study completion은 2027-06-11이다."},
  {year: 2027, quarter: 2, asset: "Mazdutide", sub: "NCT07000955 · 등록상 예상", type: "future", title: "15 mg 내약성·PK 시험 완료", text: "등록상 study completion은 2027-05-14이다."},
  {year: 2027, quarter: 3, asset: "Pemvidutide", sub: "RESTORE · NCT07009860", type: "future", title: "ALD Phase 2 완료 예정", text: "등록상 primary completion은 2027-03-31, study completion은 2027-08-31이다."},
  {year: 2027, quarter: 3, asset: "Mazdutide", sub: "NCT06937749 · MASH", type: "future", title: "MASH 시험 완료 예정", text: "등록상 study completion은 2027-07-22이다. primary completion 날짜는 기준일 이전인 2026-04-30으로 등록돼 있다."},
  {year: 2027, quarter: 3, asset: "AZD9550", sub: "NCT07013643 · 등록상 예상", type: "future", title: "AZD6234 병용 DDI 시험 완료", text: "과체중·비만 여성의 경구피임약 약동학 상호작용 시험으로 등록상 completion은 2027-07-09이다."},
  {year: 2027, quarter: 4, asset: "Mazdutide", sub: "NCT07255209 · 등록상 예상", type: "future", title: "청소년 비만시험 primary completion", text: "등록상 primary completion은 2027-10-31, study completion은 2028-10-31이다."},
  {year: 2027, quarter: 4, asset: "Mazdutide", sub: "NCT07657676 · 등록상 예상", type: "future", title: "관상동맥 플라크 시험 primary completion", text: "등록상 primary completion은 2027-10-31, study completion은 2028-02-28이다."},
  {year: 2028, quarter: 1, asset: "Mazdutide", sub: "NCT07657676 · 등록상 예상", type: "future", title: "관상동맥 플라크 시험 완료", text: "등록상 study completion은 2028-02-28이다."},
  {year: 2028, quarter: 4, asset: "Mazdutide", sub: "NCT07255209 · 등록상 예상", type: "future", title: "청소년 비만시험 완료", text: "등록상 study completion은 2028-10-31이다."},
  {year: 2028, quarter: 4, asset: "Mazdutide", sub: "ASCEND-1 · NCT07517042", type: "future", title: "생활습관 병용 체중관리시험 완료", text: "등록상 primary/study completion은 2028-12이다."},
  {year: 2029, quarter: 2, asset: "Survodutide", sub: "LIVERAGE-Cirrhosis · NCT06632457", type: "future", title: "MASH 간경변 Phase 3 완료 예정", text: "등록상 primary/study completion은 2029-06-05이다."},
  {year: 2029, quarter: 3, asset: "Mazdutide", sub: "DREAM-PRE · NCT07654062", type: "future", title: "당뇨병 전단계 시험 완료", text: "등록상 primary completion은 2028-06, study completion은 2029-07이다."},
  {year: 2031, quarter: 4, asset: "Survodutide", sub: "LIVERAGE · NCT06632444", type: "future", title: "MASH F2–F3 Phase 3 완료 예정", text: "등록상 primary/study completion은 2031-12-27이다."}
);

const references = {
  "TZ-SURMOUNT1": ["Eli Lilly, SURMOUNT-1 (NCT04184622) CT.gov Results 등록 결과표", "ClinicalTrials.gov Results (T0)", "https://clinicaltrials.gov/study/NCT04184622?tab=results"],
  "TZ-SURMOUNT2": ["Eli Lilly, SURMOUNT-2 (NCT04657003) CT.gov Results 등록 결과표", "ClinicalTrials.gov Results (T0)", "https://clinicaltrials.gov/study/NCT04657003?tab=results"],
  "EN-P2PR": ["Roche (2026-01-27), CT-388(enicepatide) Phase II 비만 결과 발표", "Sponsor primary source (T3)", "https://www.roche.com/media/releases/med-cor-2026-01-27"],
  "EN-P3": ["Roche, Enith1 Phase III (NCT07351045) 등록정보", "ClinicalTrials.gov 등록 (T0r)", "https://clinicaltrials.gov/study/NCT07351045"],
  "VK-VENTURE": ["Bays et al. (2026), Weekly Subcutaneous VK2735: Phase 2 VENTURE Study", "Obesity (peer-reviewed, T1)", "https://pubmed.ncbi.nlm.nih.gov/41508550/"],
  "VK-P3": ["Viking Therapeutics, VANQUISH-1 Phase 3 (NCT07104500) 등록정보", "ClinicalTrials.gov 등록 (T0r)", "https://clinicaltrials.gov/study/NCT07104500"],
  "RB-ORAL": ["Hengrui / Kailera (2026-06-05), 경구 ribupatide Phase 2 (NCT06841445) 결과 발표", "Sponsor primary source (T3)", "https://www.hengrui.com/en/media/detail-968.html"],
  "RB-P3": ["Kailera, KaiNETIC-1 Phase 3 (NCT07284875) 등록정보", "ClinicalTrials.gov 등록 (T0r)", "https://clinicaltrials.gov/study/NCT07284875"],
  "MT-NEJM": ["Once-Monthly Maridebart Cafraglutide for the Treatment of Obesity - A Phase 2 Trial (2025)", "New England Journal of Medicine (peer-reviewed, T1)", "https://pubmed.ncbi.nlm.nih.gov/40549887/"],
  "MT-MECH": ["Véniant et al. (2024), A GIPR antagonist conjugated to GLP-1 analogues", "Nature Metabolism (peer-reviewed, T1)", "https://pubmed.ncbi.nlm.nih.gov/38316982/"],
  "MZ-GLORY2": ["Gao et al. (2026), GLORY-2 randomized clinical trial", "JAMA", "https://jamanetwork.com/journals/jama/fullarticle/2850143"],
  "MZ-APPROVAL": ["Innovent (2025), Mazdutide chronic weight-management approval in China", "Sponsor / NMPA announcement", "https://en.innoventbio.com/InvestorsAndMedia/PressReleaseDetail?key=546"],
  "MZ-RESULTS": ["Innovent, Mazdutide 9 mg GLORY-2 results and development program", "Sponsor primary source", "https://en.innoventbio.com/InvestorsAndMedia/PressReleaseDetail?key=562"],
  "SV-P3": ["le Roux et al. (2026), Survodutide once weekly for adults with obesity", "New England Journal of Medicine / PubMed", "https://pubmed.ncbi.nlm.nih.gov/42253238/"],
  "SV-MASH": ["Sanyal et al. (2024), Phase 2 survodutide in MASH and fibrosis", "New England Journal of Medicine / PubMed", "https://pubmed.ncbi.nlm.nih.gov/38847460/"],
  "SV-SAFETY": ["Zealand Pharma (2026), SYNCHRONIZE-1 safety and body-composition update", "Sponsor primary source", "https://www.globenewswire.com/news-release/2026/06/07/3307740/0/en/zealand-pharma-announces-boehringer-ingelheim-s-survodutide-phase-iii-trial-in-people-living-with-obesity-showed-targeted-34-visceral-and-63-liver-fat-reduction-while-minimizing-le.html"],
  "SV-DEAL": ["Zealand Pharma, Boehringer Ingelheim partnership and survodutide rights", "Sponsor partnering page", "https://www.zealandpharma.com/about-us/partnering/"],
  "PM-MOMENTUM": ["Altimmune, MOMENTUM 48-week Phase 2 obesity results", "Sponsor clinical-results deck", "https://ir.altimmune.com/node/15686/pdf"],
  "PM-IMPACT": ["Altimmune (2025), IMPACT Phase 2b pemvidutide MASH topline", "Sponsor primary source", "https://ir.altimmune.com/news-releases/news-release-details/altimmune-announces-positive-topline-results-impact-phase-2b"],
  "PM-ACQ": ["Altimmune (2019), acquisition of Spitfire Pharma and ALT-801", "Sponsor transaction announcement", "https://ir.altimmune.com/news-releases/news-release-details/altimmune-announces-closing-acquisition-spitfire-pharma-inc"],
  "PM-UPDATE": ["Altimmune (2026), pemvidutide program and PERFORMA plan", "Sponsor corporate update", "https://ir.altimmune.com/news-releases/news-release-details/altimmune-announces-first-quarter-2026-financial-results-and"],
  "EF-P2": ["Merck, NCT04944992 posted Phase 2a results", "ClinicalTrials.gov API", "https://clinicaltrials.gov/study/NCT04944992"],
  "EF-DEAL": ["Merck and Hanmi (2020), exclusive efinopegdutide license", "Sponsor transaction announcement", "https://www.merck.com/news/merck-and-hanmi-pharmaceutical-enter-into-licensing-agreement-to-develop-efinopegdutide-an-investigational-once-weekly-therapy-for-nonalcoholic-steatohepatitis-nash/"],
  "EF-PIPELINE": ["Merck, efinopegdutide development pipeline", "Sponsor pipeline", "https://www.merck.com/research/product-pipeline/"],
  "AZ-ASCEND": ["AstraZeneca, ASCEND AZD9550 Phase 2 study record", "Sponsor trial registry", "https://www.astrazenecaclinicaltrials.com/study/D8460C00004/"],
  "AZ-CONTEMPO": ["AstraZeneca, CONTEMPO AZD9550/AZD6234 study record", "Sponsor trial registry", "https://www.astrazenecaclinicaltrials.com/study/D8460C00002/"],
  "DA-DATA": ["MetaVia (2026), DA-1726 48 mg Phase 1 data", "SEC filing / sponsor presentation", "https://www.sec.gov/Archives/edgar/data/1638287/000110465926000793/tm2528002d8_fwp.htm"],
  "DA-STATUS": ["MetaVia (2026), DA-1726 Part 3 target-dose status", "SEC Form 8-K", "https://www.sec.gov/Archives/edgar/data/1638287/000110465926082116/tm2620006d1_8k.htm"],
  "DA-LICENSE": ["Dong-A ST–NeuroBo (2022), DA-1726 license agreement", "SEC contract exhibit", "https://www.sec.gov/Archives/edgar/data/1638287/000110465922100082/tm2225847d1_ex10-1.htm"],
  "DD-P2": ["D&D Pharmatech (2026), DD01 48-week Phase 2 histology", "Sponsor primary source", "https://ddpharmatech.com/en/board/board.php?bo_table=press_en&idx=20"],
  "DD-CHINA": ["D&D Pharmatech (2024), Salubris DD01 China obesity IND", "Sponsor primary source", "https://ddpharmatech.com/board/board.php?bo_table=press&idx=35"],
  "CMS-IND": ["China Medical System (2024), CMS-D005 China IND approval", "Sponsor primary source", "https://web.cms.net.cn/en/2024/11/ind-approval-cmss-self-developed-innovative-drug-dual-agonist-of-glucagon-like-peptide-1-receptor-glucagon-receptor-cms-d005-is-approved-for-drug-clinical-trials/"],
  "CMS-ANNUAL": ["China Medical System (2026), 2025 annual results", "HKEX regulatory filing", "https://www.hkexnews.hk/listedco/listconews/sehk/2026/0316/2026031602212.pdf"],
  "PB-ABSTRACT": ["PegBio, PB-718 Phase 1b/2a fixed-dose-combination abstract", "Diabetes / ADA", "https://diabetesjournals.org/diabetes/article/73/Supplement_1/768-P/156358/768-P-A-Phase-1b-2a-Trial-to-Assess-the-Safety"],
  "PB-ANNUAL": ["PegBio (2026), 2025 annual report and PB-718 strategy", "HKEX regulatory filing", "https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0428/2026042804363.pdf"],
  "COT-P2": ["Ambery et al. (2018), MEDI0382 Phase 2a: weight −3.84 kg vs placebo −1.70 kg, GI AE 72% vs 40%", "Lancet / PubMed", "https://pubmed.ncbi.nlm.nih.gov/29945727/"],
  "COT-54W": ["Nahra et al. (2021), Cotadutide 54-week Phase 2b (n=834): weight, GI, hepatic biomarkers", "Diabetes Care / PMC", "https://pmc.ncbi.nlm.nih.gov/articles/PMC8247525/"],
  "COT-CTG": ["Cotadutide Phase 2b NCT03235050 posted results (weight %, AE, participant flow)", "ClinicalTrials.gov Results", "https://clinicaltrials.gov/study/NCT03235050"],
  "COT-P2A-CTG": ["MEDI0382 MAD/Phase 2a NCT02548585 posted results", "ClinicalTrials.gov Results", "https://clinicaltrials.gov/study/NCT02548585"],
  "NN-P1": ["Friedrichsen et al. (2023), NN1177 three Phase 1 trials: weight up to −12.6% at 12w; GI/safety signals; development stopped", "Molecular Metabolism / PMC", "https://pmc.ncbi.nlm.nih.gov/articles/PMC10568562/"],
  "NN-MAD-CTG": ["NN1177 MAD NCT03308721 (Results not posted at audit)", "ClinicalTrials.gov", "https://clinicaltrials.gov/study/NCT03308721"],
  "SAR-P1": ["Tillner et al. (2019), SAR425899 FIH/FIP: max weight −5.32 kg (HV) / −5.46 kg (T2D)", "Diabetes Obesity and Metabolism / PubMed", "https://pubmed.ncbi.nlm.nih.gov/30091218/"],
  "SAR-CTG": ["SAR425899 Phase 2 NCT02973321 posted results (weight kg, AE, AE discontinuation flow)", "ClinicalTrials.gov Results", "https://clinicaltrials.gov/study/NCT02973321"],
  "OPK-TRIAL": ["OPK-88003 Phase 2 NCT03406377 posted results (weight %, AE tables)", "ClinicalTrials.gov Results", "https://clinicaltrials.gov/study/NCT03406377"],
  "CLASS-REVIEW": ["Melson et al. (2025), anti-obesity medication pipeline review", "Frontiers in Endocrinology", "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2025.1630199/full"],
  "MZ-DESIGN": ["Ji et al. (2022), Mazdutide Phase 1b and molecular background", "eClinicalMedicine / PMC", "https://pmc.ncbi.nlm.nih.gov/articles/PMC9561728/"],
  "SV-DESIGN": ["Zimmermann et al. (2022), BI 456906 discovery and preclinical pharmacology", "Molecular Metabolism / PMC", "https://pmc.ncbi.nlm.nih.gov/articles/PMC9679702/"],
  "PM-DESIGN": ["Altimmune, pemvidutide balanced 1:1 receptor potency", "Sponsor scientific presentation", "https://ir.altimmune.com/static-files/e79e68f8-22bc-425e-897b-47a16821a5d7"],
  "EF-DESIGN": ["Efinopegdutide/HM12525A molecular composition and comparable receptor potency", "Patent WO2019171352A2", "https://patents.google.com/patent/WO2019171352A2/en"],
  "DD-RATIO": ["D&D Pharmatech, DD01 GLP-1:glucagon potency ratio 11:1", "Sponsor Phase 2 announcement", "https://www.businesswire.com/news/home/20250616477730/en/DD-Pharmatech-Announces-Positive-Phase-2-Results-for-DD01-in-MASH-with-Robust-Reductions-in-Liver-Fat-Accompanied-by-Improvements-in-Liver-and-Metabolic-Health"],
  "DA-RATIO": ["MetaVia, DA-1726 OXM analogue and 3:1 GLP-1R:GCGR ratio", "Sponsor primary source", "https://ir.metaviatx.com/news-releases/news-release-details/metavia-reports-additional-positive-top-line-results-mad-part-2/"],
  "G3215-P1": ["Hope et al. (2024), G3215 adaptive infusion Phase 1: LS weight −2.39 kg vs placebo −0.84 kg (14 days)", "Diabetes Obesity and Metabolism / PubMed", "https://pubmed.ncbi.nlm.nih.gov/38229453/"],
  "G3215-CTG": ["G3215 Phase 1 NCT02692040 posted results (safety primary; weight exploratory)", "ClinicalTrials.gov Results", "https://clinicaltrials.gov/study/NCT02692040"],
  "RATIO-REVIEW": ["Tschöp et al. review, GLP-1/glucagon co-agonist molecular design and potency balance", "Frontiers in Endocrinology / PMC", "https://pmc.ncbi.nlm.nih.gov/articles/PMC8457634/"],
  "RT-TRIUMPH1": ["Eli Lilly (2026-05-21), TRIUMPH-1 topline: weight (efficacy & treatment-regimen), GI AE, AE discontinuation", "Sponsor PR / IR", "https://www.prnewswire.com/news-releases/lillys-triple-agonist-retatrutide-delivered-powerful-weight-loss-in-pivotal-phase-3-obesity-trial-302778859.html"],
  "RT-NCT": ["TRIUMPH-1 retatrutide master protocol NCT05929066", "ClinicalTrials.gov", "https://clinicaltrials.gov/study/NCT05929066"],
  "RT-LIVER-NM": ["Sanyal et al. (2024), retatrutide Phase 2a MASLD Nature Medicine", "Nature Medicine", "https://www.nature.com/articles/s41591-024-03018-2"],
  "RT-LIVER-PM": ["Sanyal et al. PubMed NCT04881760 MASLD substudy LF 24w", "PubMed abstract", "https://pubmed.ncbi.nlm.nih.gov/38858523/"],
  "RT-P2-CTG": ["Retatrutide Phase 2 obesity NCT04881760 posted results (weight, AE)", "ClinicalTrials.gov Results", "https://clinicaltrials.gov/study/NCT04881760"],
  "CS-REDEFINE1": ["Garvey et al. (2025), CagriSema REDEFINE 1", "NEJM", "https://www.nejm.org/doi/full/10.1056/NEJMoa2502081"],
  "CS-SAFETY": ["Novo Nordisk (2025-06-22), REDEFINE 1/2 topline with NEJM publication", "Company PR (CT.gov Results not posted as of audit)", "https://www.prnewswire.com/news-releases/cagrisema-2-4-mg--2-4-mg-demonstrated-22-7-mean-weight-reduction-in-adults-with-overweight-or-obesity-in-redefine-1--published-in-nejm-302487770.html"],
  "CS-NCT": ["REDEFINE 1 NCT05567796 (Results not posted at audit)", "ClinicalTrials.gov", "https://clinicaltrials.gov/study/NCT05567796"],
  "ZN-LANCET": ["Dahl et al. (2025), SC amycretin Phase 1b/2a weight endpoints", "Lancet / PubMed abstract", "https://pubmed.ncbi.nlm.nih.gov/40550231/"],
  "ZN-NCT": ["Amycretin SC NCT06064006 (Results not posted at audit)", "ClinicalTrials.gov", "https://clinicaltrials.gov/study/NCT06064006"],
  "ZN-ADA": ["Novo Nordisk (2026), zenagamtide T2D Phase 2 ADA company PR", "Company PR", "https://www.prnewswire.com/news-releases/novo-nordisks-investigational-zenagamtide-shows-significant-a1c-reductions-with-up-to-14-6-weight-loss-in-adults-with-type-2-diabetespresented-at-ada-2026--302793124.html"],
  "EL-LANCET": ["Billings et al. (2025), eloralintide Phase 2: AE leading to discontinuation table (e.g. 6 mg 21%, pooled 10%)", "Lancet", "https://pubmed.ncbi.nlm.nih.gov/41207310/"],
  "EL-LILLY": ["Eli Lilly (2025-11-06), eloralintide Phase 2 company PR", "Company PR", "https://www.prnewswire.com/news-releases/lillys-selective-amylin-agonist-eloralintide-demonstrated-meaningful-weight-loss-and-favorable-tolerability-in-a-phase-2-study-of-adults-with-obesity-or-overweight-302607061.html"],
  "EL-CTG": ["Eloralintide Phase 2 NCT06230523 posted results (weight primary, AE tables, AE discontinuation flow)", "ClinicalTrials.gov Results", "https://clinicaltrials.gov/study/NCT06230523"],
  "PT-ROCHE": ["Roche (2026-03-05), ZUPREME-1 petrelintide Phase 2 topline: weight up to −10.7% vs placebo −1.7% at week 42; AE disc 4.8% vs 4.9%", "Company PR", "https://www.roche.com/media/releases/med-cor-2026-03-05"],
  "PT-NCT": ["Petrelintide ZUPREME-1 NCT06662539 (Results not posted at audit)", "ClinicalTrials.gov", "https://clinicaltrials.gov/study/NCT06662539"],
  "PT-ZUP2": ["Petrelintide ZUPREME-2 NCT06926842 T2D obesity Phase 2", "ClinicalTrials.gov", "https://clinicaltrials.gov/study/NCT06926842"],
  "AZ-6234-APRICUS": ["AZD6234 Phase 2 APRICUS NCT06595238 obesity/overweight (Results not posted at audit)", "ClinicalTrials.gov", "https://clinicaltrials.gov/study/NCT06595238"],
  "AZ-6234-P1": ["AZD6234 Phase 1 SAD NCT05511025 (Results not posted at audit)", "ClinicalTrials.gov", "https://clinicaltrials.gov/study/NCT05511025"],
  "AZ-6234-COMBO": ["AZD9550 ± AZD6234 ASCEND/related combo program (registry)", "Sponsor / ClinicalTrials.gov", "https://www.astrazenecaclinicaltrials.com/study/D8460C00004/"],
  "CG-P2-CTG": ["Cagrilintide Phase 2 dose-finding NCT03856047 posted results (weight %, AE)", "ClinicalTrials.gov Results", "https://clinicaltrials.gov/study/NCT03856047"],
  "CG-P2-LANCET": ["Lau et al. (2021), once-weekly cagrilintide Phase 2 weight management", "Lancet / PubMed", "https://pubmed.ncbi.nlm.nih.gov/34798060/"],
  "CG-REDEFINE-MONO": ["REDEFINE 1 cagrilintide 2.4 mg monotherapy arm (trial-product −11.8% vs placebo −2.3% at 68w; component of CagriSema program)", "Company PR / NEJM program", "https://www.prnewswire.com/news-releases/cagrisema-2-4-mg--2-4-mg-demonstrated-22-7-mean-weight-reduction-in-adults-with-overweight-or-obesity-in-redefine-1--published-in-nejm-302487770.html"],
  "CG-P3": ["Cagrilintide monotherapy Phase 3 NCT07220642 / NCT07220759", "ClinicalTrials.gov", "https://clinicaltrials.gov/study/NCT07220642"]
};

const assetReferenceMap = {
  Tirzepatide: ["TZ-SURMOUNT1", "TZ-SURMOUNT2"],
  Enicepatide: ["EN-P2PR", "EN-P3"],
  VK2735: ["VK-VENTURE", "VK-P3"],
  Ribupatide: ["RB-ORAL", "RB-P3"],
  MariTide: ["MT-NEJM", "MT-MECH"],
  Mazdutide: ["MZ-GLORY2", "MZ-APPROVAL", "MZ-RESULTS"],
  Survodutide: ["SV-P3", "SV-MASH", "SV-SAFETY", "SV-DEAL"],
  Pemvidutide: ["PM-MOMENTUM", "PM-IMPACT", "PM-ACQ", "PM-UPDATE"],
  Efinopegdutide: ["EF-P2", "EF-DEAL", "EF-PIPELINE"],
  AZD9550: ["AZ-ASCEND", "AZ-CONTEMPO"],
  Zabopegdutide: ["DD-P2", "DD-CHINA"],
  "CMS-D005": ["CMS-IND", "CMS-ANNUAL"],
  "DA-1726": ["DA-DATA", "DA-STATUS", "DA-LICENSE"],
  "PB-718": ["PB-ABSTRACT", "PB-ANNUAL"],
  Cotadutide: ["COT-CTG", "COT-54W", "COT-P2", "COT-P2A-CTG", "CLASS-REVIEW"],
  NN1177: ["NN-P1", "NN-MAD-CTG", "CLASS-REVIEW"],
  SAR425899: ["SAR-CTG", "SAR-P1", "CLASS-REVIEW"],
  Pegapamodutide: ["OPK-TRIAL", "CLASS-REVIEW"],
  G3215: ["G3215-P1", "G3215-CTG", "CLASS-REVIEW"],
  Retatrutide: ["RT-TRIUMPH1", "RT-NCT", "RT-P2-CTG", "RT-LIVER-NM", "RT-LIVER-PM"],
  CagriSema: ["CS-REDEFINE1", "CS-SAFETY", "CS-NCT"],
  Zenagamtide: ["ZN-LANCET", "ZN-NCT", "ZN-ADA"],
  Eloralintide: ["EL-CTG", "EL-LANCET", "EL-LILLY"],
  Petrelintide: ["PT-ROCHE", "PT-NCT", "PT-ZUP2"],
  AZD6234: ["AZ-6234-APRICUS", "AZ-6234-P1", "AZ-6234-COMBO"],
  Cagrilintide: ["CG-P2-CTG", "CG-P2-LANCET", "CG-REDEFINE-MONO", "CG-P3"]
};

function registryCitation(nct) {
  return `<a class="citation registry" href="https://clinicaltrials.gov/study/${nct}" target="_blank" rel="noopener">[${nct}]</a>`;
}

function cite(keys = []) {
  return [...new Set(keys)].filter(key => references[key]).map(key =>
    `<a class="citation" href="${references[key][2]}" target="_blank" rel="noopener" title="${references[key][0]}">[${key}]</a>`
  ).join(" ");
}

function nctCitations(text = "") {
  return [...new Set(text.match(/NCT\d{8}/g) || [])].map(registryCitation).join(" ");
}

const typeNames = {
  deal: "계약·제휴",
  clinical: "임상 진행",
  data: "결과 발표",
  regulatory: "허가·규제",
  future: "향후 일정",
  stop: "중단"
};

/*
 * 비교표 필드 바인딩 (단일 원천).
 * 규칙: 핵심 임상 선택 → role:"result" & trialDependent:true 인 모든 칸이 그 임상 블록만 사용.
 * 새 결과 열을 추가할 때: 여기 + index.html th(data-column-key, data-trial-binding="dependent")만 맞추면
 * 스탬프·resolve·refs·normalize가 자동으로 따라간다.
 * 상세: docs/IDEAS_trial_driven_comparison.md
 */
const COMPARISON_FIELD_BINDING = {
  asset: { trialDependent: false, role: "asset", note: "물질/회사" },
  mechanism: { trialDependent: false, role: "asset", note: "기전 축 + 분자 설계(targets/ratio/text)" },
  stage: { trialDependent: false, role: "asset", note: "현재 단계" },
  indication: { trialDependent: false, role: "asset", note: "포트폴리오 적응증 요약" },
  trial: { trialDependent: false, role: "selection", note: "핵심 임상 선택(결과의 유일한 키)" },
  weight: { trialDependent: true, role: "result", label: "체중효능", note: "체중효능 = 선택 임상" },
  liver: { trialDependent: true, role: "result", label: "간 약효", note: "간 약효 = 선택 임상" },
  gi: { trialDependent: true, role: "result", label: "GI 안전성", note: "GI 발생 = 선택 임상" },
  discontinuation: { trialDependent: true, role: "result", label: "중단", note: "치료/GI 중단 = 선택 임상" },
  rights: { trialDependent: false, role: "asset", note: "기원/권리" },
  next: { trialDependent: false, role: "asset", note: "다음 확인사항(자산 단위, 등록 감시 부가)" },
  nextNcts: { trialDependent: false, role: "asset", note: "다음 확인 NCT" },
  refs: { trialDependent: "per-key", role: "mixed", note: "trial 블록 refs" }
};

/** 선택 임상에 종속되는 결과 열 — binding에서 파생 (하드코드 목록 금지) */
const TRIAL_RESULT_KEYS = Object.entries(COMPARISON_FIELD_BINDING)
  .filter(([, meta]) => meta.trialDependent === true && meta.role === "result")
  .map(([key]) => key);

const TRIAL_DEPENDENT_COMPARISON_KEYS = Object.entries(COMPARISON_FIELD_BINDING)
  .filter(([, meta]) => meta.trialDependent === true)
  .map(([key]) => key);

const TRIAL_DEPENDENT_REF_KEYS = ["trial", ...TRIAL_RESULT_KEYS];
const TRIAL_INDEPENDENT_REF_KEYS = ["rights"];
const TRIAL_SELECT_STORAGE_KEY = "competitor-selected-trial-v1";
const RESULT_FIELD_LABELS = Object.fromEntries(
  TRIAL_RESULT_KEYS.map(key => [key, COMPARISON_FIELD_BINDING[key].label || key])
);

function isTrialResultKey(key) {
  return TRIAL_RESULT_KEYS.includes(key);
}

const comparison = {
  // 자산 단위: indication, rights, next, nextNcts, defaultTrialId, trials[]
  // 임상 단위: id, label, meta, nct?, hasLiver, weight, liver, gi, discontinuation, refs
  // meta 형식: "NCT · 단계 · 기간 · 대표적응증" (조직학·ITT 등 endpoint/분석세트 표기 금지)
  mazdutide: {
    indication: "비만·과체중, T2D 승인<br>OSA·MASH 등 확장",
    rights: "Lilly 기원 OXM 유사체<br>Innovent: 중국 개발·상업화 권리",
    next: "9 mg 허가<br>확장 적응증 P3",
    nextNcts: ["NCT07000955", "NCT06862908", "NCT06931028", "NCT06937749"],
    defaultTrialId: "glory2",
    trials: [
      {
        id: "glory2",
        label: "GLORY-2",
        meta: "NCT06164873 · P3 · 60주 · 비만·과체중",
        nct: "NCT06164873",
        hasLiver: false,
        weight: "<b>Mazdutide −18.55%</b><br>위약 −3.02%<br><small>전체 efficacy estimand · 비당뇨 하위군 −20.08%</small>",
        liver: null,
        gi: "구토 53.1%<br>오심 46.9%<br>설사 39.4%",
        discontinuation: "<b>GI 중단 0.3%</b>",
        refs: { trial: ["MZ-GLORY2"], weight: ["MZ-GLORY2"], gi: ["MZ-GLORY2"], discontinuation: ["MZ-GLORY2"] }
      }
    ],
    rightsRefs: ["MZ-RESULTS"]
  },
  survodutide: {
    indication: "비만·과체중<br>MASH·간경변",
    rights: "Zealand·BI 공동 발명<br>2011 계약, BI 글로벌 권리",
    next: "MASH P3<br>규제 제출 일정",
    nextNcts: ["NCT05202353", "NCT06632457", "NCT06632444"],
    defaultTrialId: "sync1",
    trials: [
      {
        id: "sync1",
        label: "SYNCHRONIZE-1",
        meta: "NCT06066515 · P3 · 76주 · 비만",
        nct: "NCT06066515",
        hasLiver: true,
        weight: "<b>Survodutide 최대 −16.6%</b><br><small>회사 공개 efficacy estimand</small><br>treatment-regimen: −12.2~−13.0%<br>위약 −5.4%",
        liver: "<b>간지방 감소 63%</b><br><small>회사 공개 SYNCHRONIZE-1 사전명세 체성분 분석</small>",
        gi: "전체 GI AE<br><b>80.9~89.7%</b>",
        discontinuation: "<b>GI 중단 약 19%</b><br><small>회사 공개 · CT.gov Results 미게시</small>",
        refs: { trial: ["SV-P3"], weight: ["SV-P3"], liver: ["SV-SAFETY"], gi: ["SV-P3"], discontinuation: ["SV-SAFETY"] }
      },
      {
        id: "mash_p2",
        label: "MASH Phase 2",
        meta: "NCT04771273 · P2 · 48주 · MASH",
        nct: "NCT04771273",
        hasLiver: true,
        // 이 임상에 체중·GI중단 공개 요약이 없으면 null → 선택 임상 기준 공개값 없음
        weight: null,
        liver: "<b>MASH 개선(섬유화 비악화)</b><br>Survodutide 2.4 mg 47% · 4.8 mg 62% · 6.0 mg 43%<br>위약 14%<br>MRI-PDFF ≥30% 감소<br>2.4 mg 63% · 4.8 mg 67% · 6.0 mg 57% · 위약 14%<br>섬유화 ≥1단계 개선<br>2.4 mg 34% · 4.8 mg 36% · 6.0 mg 34% · 위약 22%<br><small>Sanyal et al. NEJM · PubMed 초록</small>",
        gi: "오심 66% vs 위약 23%<br>설사 49% vs 23%<br>구토 41% vs 4%<br><small>MASH P2 보고</small>",
        discontinuation: null,
        refs: { trial: ["SV-MASH"], weight: ["SV-MASH"], liver: ["SV-MASH"], gi: ["SV-MASH"], discontinuation: ["SV-MASH"] }
      }
    ],
    rightsRefs: ["SV-DEAL"]
  },
  tirzepatide: {
    indication: "비만, T2D<br>OSA 등 확장",
    rights: "Eli Lilly 자체 개발<br>비만·T2D 승인",
    next: "심혈관 결과<br>소아 확장",
    nextNcts: ["NCT05556512", "NCT06439277"],
    defaultTrialId: "surmount1",
    trials: [
      {
        id: "surmount1",
        label: "SURMOUNT-1",
        meta: "NCT04184622 · P3 · 72주 · 비당뇨 비만",
        nct: "NCT04184622",
        hasLiver: false,
        weight: "<b>Tirzepatide −22.5%</b><br>위약 −2.4%<br><small>15 mg · 72주 · n=2539 · CT.gov Results</small>",
        liver: "[회사 미공개]<br><small>비만 본시험에 간 지표 없음</small>",
        gi: "오심 31.9%<br>구토 12.9%<br>설사 23.7% · 변비 12.7%<br><small>15 mg군 · CT.gov Results</small>",
        discontinuation: "[CT.gov 미분리]<br><small>등록 결과표는 연구중단 사유만 제시. 치료중단·GI 단독 중단 열 없음</small>",
        refs: { trial: ["TZ-SURMOUNT1"], weight: ["TZ-SURMOUNT1"], gi: ["TZ-SURMOUNT1"], discontinuation: ["TZ-SURMOUNT1"] }
      },
      {
        id: "surmount2",
        label: "SURMOUNT-2",
        meta: "NCT04657003 · P3 · 72주 · T2D 동반 비만",
        nct: "NCT04657003",
        hasLiver: false,
        weight: "<b>Tirzepatide −15.7%</b><br>위약 −3.3%<br><small>15 mg · 72주 · n=938 · CT.gov Results</small>",
        liver: "[회사 미공개]<br><small>본시험에 간 지표 없음</small>",
        gi: "오심 21.9%<br>구토 12.9%<br>설사 21.2% · 변비 9.0%<br><small>15 mg군 · CT.gov Results</small>",
        discontinuation: "[CT.gov 미분리]<br><small>등록 결과표에 치료중단·GI 단독 중단 열 없음</small>",
        refs: { trial: ["TZ-SURMOUNT2"], weight: ["TZ-SURMOUNT2"], gi: ["TZ-SURMOUNT2"], discontinuation: ["TZ-SURMOUNT2"] }
      }
    ],
    rightsRefs: ["TZ-SURMOUNT1"]
  },
  enicepatide: {
    indication: "비만, 과체중<br>T2D",
    rights: "Carmot CT-388 기원<br>2024 Roche 인수",
    next: "Enith P3<br>petrelintide 병용",
    nextNcts: ["NCT07351045", "NCT07351058", "NCT07589686"],
    defaultTrialId: "ct388p2",
    trials: [
      {
        id: "ct388p2",
        label: "Phase 2 비만",
        meta: "NCT06525935 · P2 · 48주 · 비만·과체중",
        nct: "NCT06525935",
        hasLiver: false,
        weight: "<b>위약보정 −22.5%</b> (p&lt;0.001)<br><small>24 mg · 48주 · n=469 · 회사 공개 · CT.gov Results 미게시</small>",
        liver: "[회사 미공개]<br><small>발표 범위에 간 지표 없음</small>",
        gi: "[회사 미공개]<br><small>\'대부분 경증~중등도\' 로만 기술, 발생률 수치 없음</small>",
        discontinuation: "<b>AE로 인한 치료중단 5.9%</b><br>위약 1.3%<br><small>회사 공개 · CT.gov Results 미게시</small>",
        refs: { trial: ["EN-P2PR"], weight: ["EN-P2PR"], discontinuation: ["EN-P2PR"] }
      }
    ],
    rightsRefs: ["EN-P2PR"]
  },
  vk2735: {
    indication: "비만, 과체중<br>(당뇨 제외)",
    rights: "Viking 자체 개발<br>피하·경구 병행",
    next: "VANQUISH P3<br>경구 확장",
    nextNcts: ["NCT07104500", "NCT07104383"],
    defaultTrialId: "venture",
    trials: [
      {
        id: "venture",
        label: "VENTURE (SC)",
        meta: "NCT06068946 · P2 · 13주 · 비만·과체중",
        nct: "NCT06068946",
        hasLiver: false,
        weight: "<b>VK2735 −14.7%</b> (−14.6 kg)<br>위약 −1.7% (−1.8 kg)<br><small>15 mg · 13주 · n=176 · 피어리뷰</small>",
        liver: "[회사 미공개]<br><small>비만 본시험에 간 지표 없음</small>",
        gi: "[1차 미확보]<br><small>초록은 \'주로 GI, 적정 후 빈도 감소\' 로만 기술. 전문 미접근</small>",
        discontinuation: "[1차 미확보]<br><small>초록에 중단률 없음. CT.gov Results 미게시</small>",
        refs: { trial: ["VK-VENTURE"], weight: ["VK-VENTURE"] }
      },
      {
        id: "ventureoral",
        label: "VENTURE-Oral",
        meta: "NCT06828055 · P2 · 경구 · 비만·과체중",
        nct: "NCT06828055",
        hasLiver: false,
        weight: "[1차 미확보]",
        liver: "[회사 미공개]",
        gi: "[1차 미확보]<br><small>경구 코호트 GI 발생률 공개 확인 안 됨</small>",
        discontinuation: "[1차 미확보]<br><small>경구 코호트 중단률 공개 확인 안 됨</small>",
        refs: { trial: ["VK-P3"] }
      }
    ],
    rightsRefs: ["VK-VENTURE"]
  },
  ribupatide: {
    indication: "비만, 과체중<br>T2D · OSA",
    rights: "Hengrui 개발<br>Kailera 글로벌 권리",
    next: "KaiNETIC-1 P3<br>경구 P3",
    nextNcts: ["NCT07284875", "NCT07285902"],
    defaultTrialId: "hrs9531oral",
    trials: [
      {
        id: "hrs9531oral",
        label: "경구 Phase 2",
        meta: "NCT06841445 · P2 · 26주 · 비만",
        nct: "NCT06841445",
        hasLiver: false,
        weight: "<b>Ribupatide −12.1%</b><br>위약 −2.3%<br><small>25 mg 경구 · 26주 · n=166 · efficacy estimand · 회사 공개 · CT.gov Results 미게시</small>",
        liver: "[회사 미공개]<br><small>발표 범위에 간 지표 없음</small>",
        gi: "오심 22.7%<br>구토 11.4%<br><small>25 mg군 · 회사 공개 · CT.gov Results 미게시</small>",
        discontinuation: "<b>GI 사유 영구 중단 0건</b><br><small>용량 감량도 보고되지 않음 · 회사 공개 · CT.gov Results 미게시</small>",
        refs: { trial: ["RB-ORAL"], weight: ["RB-ORAL"], gi: ["RB-ORAL"], discontinuation: ["RB-ORAL"] }
      },
      {
        id: "hrs9531inj",
        label: "주사 Phase 2 (비만)",
        meta: "NCT05881837 · P2 · 비만·과체중",
        nct: "NCT05881837",
        hasLiver: false,
        weight: "[1차 미확보]",
        liver: "[회사 미공개]",
        gi: "[1차 미확보]<br><small>주사 Phase 2 GI 발생률 1차 미확인</small>",
        discontinuation: "[1차 미확보]<br><small>주사 Phase 2 중단률 1차 미확인</small>",
        refs: { trial: ["RB-P3"] }
      }
    ],
    rightsRefs: ["RB-ORAL"]
  },
  maritide: {
    indication: "비만, 과체중<br>T2D 동반",
    rights: "Amgen 자체 개발<br>AMG 133 기원",
    next: "MARITIME P3<br>심혈관·OSA",
    nextNcts: ["NCT07037433", "NCT07225686", "NCT06987695"],
    defaultTrialId: "maritidep2",
    trials: [
      {
        id: "maritidep2",
        label: "Phase 2 (비만 코호트)",
        meta: "NCT05669599 · P2 · 52주 · 비만",
        nct: "NCT05669599",
        hasLiver: false,
        weight: "<b>MariTide −12.3 ~ −16.2%</b><br>위약 −2.5%<br><small>월 1회 · 52주 · 전체 등록 592명 중 비만 코호트 465명 · treatment policy estimand · 피어리뷰</small>",
        liver: "[회사 미공개]<br><small>비만 본시험에 간 지표 없음</small>",
        gi: "[1차 미확보]<br><small>초록은 \'GI 흔함, 용량적정으로 감소\' 로만 기술. 발생률 수치 미확보</small>",
        discontinuation: "[1차 미확보]<br><small>초록에 중단률 없음. CT.gov Results 미게시</small>",
        refs: { trial: ["MT-NEJM"], weight: ["MT-NEJM"] }
      },
      {
        id: "maritidep2dm",
        label: "Phase 2 (비만+T2D)",
        meta: "NCT05669599 · P2 · 52주 · T2D 동반 비만",
        nct: "NCT05669599",
        hasLiver: false,
        weight: "<b>MariTide −8.4 ~ −12.3%</b><br>위약 −1.7%<br><small>월 1회 · 52주 · 전체 등록 592명 중 비만+T2D 코호트 127명 · treatment policy estimand · 피어리뷰</small>",
        liver: "[회사 미공개]",
        gi: "[1차 미확보]<br><small>초록에 코호트별 GI 발생률 없음</small>",
        discontinuation: "[1차 미확보]<br><small>초록에 코호트별 중단률 없음</small>",
        refs: { trial: ["MT-NEJM"], weight: ["MT-NEJM"] }
      }
    ],
    rightsRefs: ["MT-MECH"]
  },
  pemvidutide: {
    indication: "비만, MASH<br>AUD·ALD",
    rights: "Spitfire SP-1373 기원<br>2019 Altimmune 인수",
    next: "PERFORMA P3<br>AUD·ALD 결과",
    nextNcts: ["NCT07009860", "NCT05989711"],
    defaultTrialId: "momentum",
    trials: [
      {
        id: "momentum",
        label: "MOMENTUM",
        meta: "NCT05295875 · P2 · 48주 · 비만",
        nct: "NCT05295875",
        hasLiver: false,
        weight: "<b>Pemvidutide −15.6%</b><br>위약 −2.2%<br><small>2.4 mg · 48주 · 회사 공개 · CT.gov Results 미게시</small>",
        liver: null,
        gi: "오심 51.5%<br>구토 27.8%<br>설사 18.6% · 변비 22.7%<br><small>회사 공개 · CT.gov Results 미게시</small>",
        discontinuation: "<b>전체 치료중단 19.6%</b><br><small>GI 미분리 · 회사 공개 · CT.gov Results 미게시</small>",
        refs: { trial: ["PM-MOMENTUM"], weight: ["PM-MOMENTUM"], gi: ["PM-MOMENTUM"], discontinuation: ["PM-MOMENTUM"] }
      },
      {
        id: "impact",
        label: "IMPACT",
        meta: "NCT05989711 · P2b · 24주 · MASH",
        nct: "NCT05989711",
        hasLiver: true,
        weight: "<b>Pemvidutide 1.2 mg −5.0%</b><br>1.8 mg −6.2%<br>위약 −1.0%<br><small>IMPACT 24주 · 회사 topline</small>",
        liver: "<b>MASH 해소(섬유화 비악화, ITT)</b><br>Pemvidutide 1.2 mg 59.1%<br>Pemvidutide 1.8 mg 52.1%<br>위약 19.1%<br>MRI-PDFF 간지방 감소<br>1.2 mg 58.0% · 1.8 mg 62.8% · 위약 16.2%<br>섬유화 개선(MASH 비악화, ITT)<br>1.2 mg 31.8% · 1.8 mg 34.5% · 위약 25.9%<br><small>섬유화 조직학 군간 차이는 통계적 유의성 없음(회사 ITT)</small>",
        // GI AE 발생률(오심·구토 등) topline 요약 없음 → null. 중단율은 discontinuation만.
        gi: null,
        discontinuation: "<b>AE 관련 중단</b><br>1.2 mg 0.0% · 1.8 mg 1.2% · 위약 2.4%<br><small>IMPACT 회사 topline</small>",
        refs: { trial: ["PM-IMPACT"], weight: ["PM-IMPACT"], liver: ["PM-IMPACT"], discontinuation: ["PM-IMPACT"] }
      }
    ],
    rightsRefs: ["PM-ACQ"]
  },
  efino: {
    indication: "MASH<br>보상성 간경변",
    rights: "Hanmi HM12525A<br>Janssen 반환 → 2020 Merck 도입",
    next: "조직학·간경변 결과<br>후기개발 전환",
    nextNcts: ["NCT06465186"],
    defaultTrialId: "mk001",
    trials: [
      {
        id: "mk001",
        label: "MK-6024-001",
        meta: "NCT04944992 · P2a · 24주 · NAFLD/MASH",
        nct: "NCT04944992",
        hasLiver: true,
        weight: "<b>Efinopegdutide −8.5%</b><br>Semaglutide −7.1%",
        liver: "<b>Efinopegdutide 상대 간지방 감소 72.7%</b><br>Semaglutide 42.3%<br>절대 감소: Efinopegdutide 14.9%p · Semaglutide 8.8%p<br><small>MRI-PDFF primary · CT.gov 결과 · 조직학 endpoint 아님</small>",
        gi: "오심 27.8%<br>구토·설사·변비 각 16.7%",
        discontinuation: "<b>전체 치료중단 5.6%</b><br><small>GI 미분리</small>",
        refs: { trial: ["EF-P2"], weight: ["EF-P2"], liver: ["EF-P2"], gi: ["EF-P2"], discontinuation: ["EF-P2"] }
      }
    ],
    rightsRefs: ["EF-DEAL"]
  },
  azd9550: {
    indication: "비만·과체중<br>대사질환",
    rights: "AstraZeneca 내부 개발<br>공개 외부 라이선스 없음",
    next: "ASCEND 결과<br>후속 단계 선택",
    nextNcts: ["NCT06151964"],
    defaultTrialId: "ascend",
    trials: [
      {
        id: "ascend",
        label: "ASCEND",
        meta: "NCT06862791 · P2 · 완료 · 비만·과체중",
        nct: "NCT06862791",
        hasLiver: false,
        weight: "<b>결과 미공개</b><br>377명 시험 완료",
        liver: null,
        gi: "결과 미공개",
        discontinuation: "미공개",
        refs: { trial: ["AZ-ASCEND"], weight: ["AZ-ASCEND"], gi: ["AZ-ASCEND"], discontinuation: ["AZ-ASCEND"] }
      }
    ],
    rightsRefs: ["AZ-ASCEND"]
  },
  dd01: {
    indication: "MASLD·MASH<br>중국 비만",
    rights: "D&D 자체 개발<br>중국 비만 권리: Salubris",
    next: "후속 임상 등록<br>글로벌 파트너링",
    nextNcts: [],
    defaultTrialId: "dd_p2",
    trials: [
      {
        id: "dd_p2",
        label: "DD01 Phase 2",
        meta: "NCT06410924 · P2 · 48주 · MASLD/MASH",
        nct: "NCT06410924",
        hasLiver: true,
        weight: "평균 체중변화 미공개<br><b>DD01: &gt;5% 감소 달성 51.5%</b><br>위약 8.8%<br><small>24주 responder 분석</small>",
        liver: "<b>섬유화 ≥1단계 개선(MASH 비악화) 50.0%</b><br>위약 15.8%<br><b>MASH 해소(섬유화 비악화) 62.5%</b><br>위약 5.3%<br>둘 다 달성 37.5% · 위약 5.3%<br><small>Week 48 · paired biopsy n=35 (40 mg 16 / 위약 19) · 회사 공개</small>",
        gi: "전체 GI disorder<br><b>79% vs 44%</b><br><small>회사 공개 · CT.gov Results 미게시</small>",
        discontinuation: "<b>GI 중단 8.0%</b><br><small>biopsy-confirmed set · 회사 공개 · CT.gov Results 미게시</small>",
        refs: { trial: ["DD-P2"], weight: ["DD-P2"], liver: ["DD-P2"], gi: ["DD-P2"], discontinuation: ["DD-P2"] }
      }
    ],
    rightsRefs: ["DD-CHINA"]
  },
  cms: {
    indication: "비만·대사질환<br>세부 적응증 미공개",
    rights: "China Medical System<br>자체 개발",
    next: "P1 결과<br>등록번호·용량 공개",
    nextNcts: [],
    defaultTrialId: "cms_p1",
    trials: [
      {
        id: "cms_p1",
        label: "China Phase 1",
        meta: "NCT 식별 안 됨 · 비만·대사질환",
        hasLiver: false,
        weight: "<b>사람 효능 미공개</b>",
        liver: null,
        gi: "사람 안전성 미공개",
        discontinuation: "미공개",
        refs: { trial: ["CMS-ANNUAL"], weight: ["CMS-ANNUAL"], gi: ["CMS-ANNUAL"], discontinuation: ["CMS-ANNUAL"] }
      }
    ],
    rightsRefs: ["CMS-IND"]
  },
  da1726: {
    indication: "비만<br>MASH·MetALD 계획",
    rights: "Dong-A ST 개발<br>2022 MetaVia: 한국 제외 글로벌 권리",
    next: "Part 3 적정<br>48/64 mg 데이터",
    nextNcts: ["NCT06252220"],
    defaultTrialId: "fih",
    trials: [
      {
        id: "fih",
        label: "First-in-human",
        meta: "NCT06252220 · P1 · 비만",
        nct: "NCT06252220",
        hasLiver: false,
        weight: "<b>DA-1726 기준선 대비 −9.1%</b><br>48 mg 비적정 · Day 54 · n=6<br><small>위약 체중값 미공개</small>",
        liver: null,
        gi: "GI disorder 5/6<br>구토 5/6 · 오심 3/6<br><small>소표본 해석 주의</small>",
        discontinuation: "<b>GI 중단 0/6</b>",
        refs: { trial: ["DA-STATUS"], weight: ["DA-DATA"], gi: ["DA-DATA"], discontinuation: ["DA-DATA"] }
      }
    ],
    rightsRefs: ["DA-LICENSE"]
  },
  pb718: {
    indication: "비만·T2D",
    rights: "PegBio 자체 개발<br>PB-119 + PB-722 고정용량 복합",
    next: "후속 전략 결정<br>개발 재개 여부",
    nextNcts: ["NCT06147544"],
    defaultTrialId: "pb_p1b",
    trials: [
      {
        id: "pb_p1b",
        label: "Phase 1b/2a",
        meta: "NCT06147544 · 완료 · 비만·T2D",
        nct: "NCT06147544",
        hasLiver: false,
        weight: "<b>비교 가능한 공개값 제한</b>",
        liver: null,
        gi: "공개 세부값 제한",
        discontinuation: "미공개",
        refs: { trial: ["PB-ABSTRACT"], weight: ["PB-ABSTRACT"], gi: ["PB-ABSTRACT"], discontinuation: ["PB-ABSTRACT"] }
      }
    ],
    rightsRefs: ["PB-ABSTRACT"]
  },
  // —— 역사·중단 자산 (class reference). 효능 수치는 T0/T1만. ——
  cotadutide: {
    indication: "T2D·과체중/비만<br>NASH 프로그램(개발 중단)",
    rights: "MedImmune/AstraZeneca · MEDI0382<br>전략적 포트폴리오 결정으로 개발 중단",
    next: "개발 중단 (AZ 공개)<br>class reference로 논문·CT.gov Results 유지",
    nextNcts: ["NCT03235050", "NCT02548585"],
    defaultTrialId: "p2b_54w",
    trials: [
      {
        id: "p2b_54w",
        label: "Phase 2b 54주 T2D",
        meta: "NCT03235050 · P2b · 54주 · T2D·과체중/비만 · n=834",
        nct: "NCT03235050",
        hasLiver: false,
        // 체중·GI·AE 탈락: CT.gov Results. 간 조직학 아님(바이오마커는 논문 ad hoc).
        weight: "<b>Cotadutide 300 μg −4.16%</b><br>200 μg −3.08% · 100 μg −3.27%<br>위약 −0.84% · 리라글루타이드 1.8 mg −3.20%<br><small>CT.gov Results · % 체중 · 54주 LS mean</small><br>14주(공동 primary): 300 μg −4.33% · 위약 −0.70%",
        liver: "<span class=\"result-empty\">[1차 미확보]</span> 간 조직학<br><small>본 시험은 조직학 primary 아님. ALT/AST·FIB-4 등 바이오마커는 Diabetes Care ad hoc</small>",
        gi: "오심<br>300 μg <b>41.0%</b> (105/256) · 200 μg 33.2% (85/256)<br>100 μg 23.0% (23/100) · 위약 10.7% (12/112)<br>구토 300 μg 16.8% (43/256) · 200 μg 19.9% (51/256)<br>설사 300 μg 10.9% (28/256) · 200 μg 19.1% (49/256)<br><small>CT.gov Results · other AE</small><br>논문 요약(용량 통합): 오심 35% · 구토 17%",
        discontinuation: "<b>AE로 탈락</b> (participant flow)<br>300 μg 1/256 · 200 μg 4/256 · 100 μg 1/100<br>위약 0/112 · 리라글루타이드 0/110<br><small>CT.gov drop reason = Adverse Event · GI 단독 미분리</small>",
        refs: {
          trial: ["COT-CTG", "COT-54W"],
          weight: ["COT-CTG"],
          liver: ["COT-54W"],
          gi: ["COT-CTG", "COT-54W"],
          discontinuation: ["COT-CTG"]
        }
      },
      {
        id: "p2a_ambery",
        label: "Phase 2a (Ambery)",
        meta: "NCT02548585 · P1/2a · ≤41일 · T2D·과체중/비만",
        nct: "NCT02548585",
        hasLiver: false,
        weight: "<b>MEDI0382 −3.84 kg</b> vs 위약 −1.70 kg<br>군간 차 −2.14 kg<br><small>Lancet phase 2a · ITT · day 41 · Ambery et al.</small><br>CT.gov Cohort 4: −3.83 kg vs −1.71 kg",
        liver: null,
        gi: "GI 장애 72% (18/25) vs 위약 40% (13/26)<br>식욕감소 20% vs 0%<br><small>Lancet · TEAE</small>",
        discontinuation: "AE로 중단<br>MEDI0382 3/25 · 위약 1/26<br><small>Lancet phase 2a</small>",
        refs: {
          trial: ["COT-P2", "COT-P2A-CTG"],
          weight: ["COT-P2", "COT-P2A-CTG"],
          gi: ["COT-P2"],
          discontinuation: ["COT-P2"]
        }
      }
    ],
    rightsRefs: ["COT-54W", "COT-P2"]
  },
  nn1177: {
    indication: "과체중·비만",
    rights: "Novo Nordisk · NNC9204-1177<br>Phase 1 후 안전 신호로 개발 중단",
    next: "개발 중단 (안전·내약 신호)<br>class reference",
    nextNcts: ["NCT03308721", "NCT02941042"],
    defaultTrialId: "mad_12w",
    trials: [
      {
        id: "mad_12w",
        label: "Phase 1 MAD 12주",
        meta: "NCT03308721 · P1 · 12주 · 과체중·비만 · n=99",
        nct: "NCT03308721",
        hasLiver: false,
        // CT.gov Results 미게시 → 피어 리뷰 full text (Mol Metab / PMC)
        weight: "<b>NN1177 최대 −12.6%</b> (4200 μg 경로)<br>200 μg −0.4% ~ 용량 의존<br><small>12주 · MAD · Friedrichsen et al. Mol Metab</small><br><span class=\"result-empty\">[CT.gov Results 미게시]</span>",
        liver: "<span class=\"result-empty\">[1차 미확보]</span> 간지방 약효<br><small>AST/ALT 상승은 안전 신호로 보고(약효 간 endpoint 아님)</small>",
        gi: "GI 관련 TEAE <b>67.1%</b> vs 위약 30.4%<br>오심·구토가 주된 증상<br>예: 4200 μg 오심 65% (13/20) · 구토 50% (10/20)<br><small>Mol Metab MAD 표 · CT.gov Results 미게시</small>",
        discontinuation: "<b>조기 탈락 유발 이벤트</b><br>4200 μg 6/20 (30%) · 6000 μg 3/9 (33%)<br>저용량 군 0–11%<br><small>MAD · TEAE leading to withdrawal · Mol Metab</small><br><span class=\"result-empty\">[CT.gov 미분리]</span> GI 단독 중단%",
        refs: {
          trial: ["NN-P1", "NN-MAD-CTG"],
          weight: ["NN-P1"],
          gi: ["NN-P1"],
          discontinuation: ["NN-P1"]
        }
      }
    ],
    rightsRefs: ["NN-P1"]
  },
  sar425899: {
    indication: "T2D·과체중/비만",
    rights: "Sanofi 내부 개발<br>후기 개발 미지속",
    next: "활성 개발 신호 없음<br>class reference",
    nextNcts: ["NCT02973321", "NCT02411825"],
    defaultTrialId: "p2_26w",
    trials: [
      {
        id: "p2_26w",
        label: "Phase 2 26주 T2D",
        meta: "NCT02973321 · P2 · 26주 · T2D · CT.gov Results",
        nct: "NCT02973321",
        hasLiver: false,
        weight: "<b>SAR425899 0.16 mg −5.33 kg</b><br>0.12 mg −4.28 kg · 0.20 mg −4.41 kg<br>위약 −1.76 kg · 리라글루타이드 −4.59 kg<br><small>CT.gov Results · LS mean · 26주</small><br>≥5% 감량 0.16 mg 45.5% · 위약 3.0%",
        liver: null,
        gi: "오심<br>0.12 mg 45.8% (33/72) · 0.16 mg <b>55.9%</b> (33/59)<br>0.20 mg 55.3% (26/47) · 위약 15.2% (5/33)<br>구토 0.12 29.2% · 0.16 23.7% · 0.20 36.2% · 위약 6.1%<br>설사 0.12 20.8% · 0.16 18.6% · 0.20 19.1% · 위약 6.1%<br><small>CT.gov Results · other AE ≥5%</small>",
        discontinuation: "<b>AE로 탈락</b> (participant flow)<br>0.12 mg 10/66 (15.2%) · 0.16 mg 11/66 (16.7%)<br>0.20 mg 13/64 (20.3%) · 위약 1/33 (3.0%)<br>리라글루타이드 3/67 (4.5%)<br><small>CT.gov · GI 단독 미분리</small>",
        refs: {
          trial: ["SAR-CTG", "SAR-P1"],
          weight: ["SAR-CTG"],
          gi: ["SAR-CTG"],
          discontinuation: ["SAR-CTG"]
        }
      },
      {
        id: "p1_mad",
        label: "Phase 1 MAD (Tillner)",
        meta: "NCT02411825 · P1 · 21–28일 · 건강·T2D",
        nct: "NCT02411825",
        hasLiver: false,
        weight: "<b>최대 체중 감소</b><br>건강 지원자 −5.32 kg · T2D −5.46 kg<br><small>투여 종료 시점 · Tillner et al. DOM · vs 위약 P&lt;0.001</small><br><span class=\"result-empty\">[CT.gov Results 미게시]</span>",
        liver: null,
        gi: "가장 흔한 AE: 위장관<br>T2D 환자에서 HV보다 GI 부작용 덜함<br><small>Tillner et al. abstract · 개별 % 표는 abstract 미기재</small><br><span class=\"result-empty\">[1차 미확보]</span> 오심·구토 개별 %",
        discontinuation: "<span class=\"result-empty\">[1차 미확보]</span><br><small>abstract에 AE 중단 % 표 없음 · CT.gov Results 미게시</small>",
        refs: {
          trial: ["SAR-P1"],
          weight: ["SAR-P1"],
          gi: ["SAR-P1"],
          discontinuation: ["SAR-P1"]
        }
      }
    ],
    rightsRefs: ["SAR-P1", "SAR-CTG"]
  },
  opk88003: {
    indication: "T2D",
    rights: "OPKO Health · pegapamodutide (OPK-88003 / MOD-6031)<br>후속 활성 개발 근거 제한",
    next: "파이프라인 복귀 여부 확인<br>등록 Results는 유지",
    nextNcts: ["NCT03406377"],
    defaultTrialId: "p2_30w",
    trials: [
      {
        id: "p2_30w",
        label: "Phase 2 30주 T2D",
        meta: "NCT03406377 · P2 · 30주 · T2D · n=113",
        nct: "NCT03406377",
        hasLiver: false,
        weight: "<b>OPK-88003 −5.83%</b> vs 위약 −2.10%<br><small>CT.gov Results · % 체중 LS mean · 30주</small><br>≥5% 감량 48.8% vs 위약 16.7%",
        liver: null,
        gi: "오심 <b>38.9%</b> (28/72) vs 위약 4.9% (2/41)<br>구토 26.4% (19/72) vs 2.4% (1/41)<br>설사 12.5% (9/72) vs 7.3% (3/41)<br><small>CT.gov Results · other AE</small>",
        discontinuation: "미완료 21/72 (약물) · 16/41 (위약)<br><span class=\"result-empty\">[CT.gov 미분리]</span> AE 사유별 탈락 표 없음<br><small>participant flow에 drop reason 미게시</small>",
        refs: {
          trial: ["OPK-TRIAL"],
          weight: ["OPK-TRIAL"],
          gi: ["OPK-TRIAL"],
          discontinuation: ["OPK-TRIAL"]
        }
      }
    ],
    rightsRefs: ["OPK-TRIAL"]
  },
  g3215: {
    indication: "과체중·비만 (±T2D)",
    rights: "Gubra / Imperial 계열 공개 임상<br>적응 연속 주입 제형 · 후속 활성 신호 제한",
    next: "권리·개발 상태 재확인<br>P1 논문·CT.gov Results 유지",
    nextNcts: ["NCT02692040"],
    defaultTrialId: "p1_infusion",
    trials: [
      {
        id: "p1_infusion",
        label: "Phase 1 적응 주입 14일",
        meta: "NCT02692040 · P1 · 14일 SC 주입 · 과체중·비만 · n=26",
        nct: "NCT02692040",
        hasLiver: false,
        weight: "<b>G3215 −2.39 kg</b> vs 위약 −0.84 kg<br><small>14일 주입 · LS mean · Hope et al. DOM</small><br><span class=\"result-empty\">[CT.gov Results 미게시]</span> 통합 % 체중 표(용량 분절)",
        liver: null,
        gi: "가장 흔한 AE: 오심·구토<br>대부분 경증 · 주입 속도 실시간 조절로 완화<br><small>Hope et al. DOM</small><br><span class=\"result-empty\">[1차 미확보]</span> 용량별 오심 % 표(abstract)",
        discontinuation: "배정 26명 · 14일 주입 완료 23명<br><span class=\"result-empty\">[1차 미확보]</span> AE 중단 % 표<br><small>abstract·CT.gov AE 표는 용량 분절·소표본</small>",
        refs: {
          trial: ["G3215-P1", "G3215-CTG"],
          weight: ["G3215-P1"],
          gi: ["G3215-P1"],
          discontinuation: ["G3215-P1"]
        }
      }
    ],
    rightsRefs: ["G3215-P1"]
  },
  // 수치 출처: CT.gov Results > Lancet/NEJM/NatMed > 회사 PR(Results 미게시 시).
  // [회사 미공개] / [1차 미확보] 구분 유지. 2차 뉴스 수치 금지.
  retatrutide: {
    indication: "비만·과체중<br>T2D·OA·OSA·MASLD 프로그램",
    rights: "Eli Lilly 내부 개발<br>GIP/GLP-1/glucagon triple (LY3437943)",
    next: "TRIUMPH-2/3 등 추가 결과<br>규제 제출 일정",
    nextNcts: ["NCT05929066", "NCT04881760"],
    defaultTrialId: "triumph1",
    trials: [
      {
        id: "triumph1",
        label: "TRIUMPH-1",
        meta: "NCT05929066 · P3 · 80주 · 비만·과체중(비당뇨) · n=2339 무작위배정",
        nct: "NCT05929066",
        hasLiver: false,
        weight: "<b>Retatrutide 12 mg −28.3%</b><br>9 mg −25.9% · 4 mg −19.0%<br>위약 −2.2%<br><small>80주 · efficacy estimand · Company PR</small><br>treatment-regimen: 12 mg −25.0% · 9 mg −23.7% · 4 mg −17.6% · 위약 −3.9%<br>≥30% 감량 12 mg 45.3%<br>BMI≥35 연장 104주(12 mg 경로) −30.3%<br><small>CT.gov Results 미게시(감사 시점) → PR 토플라인</small>",
        liver: "<span class=\"result-empty\">[회사 미공개]</span><br><small>Lilly TRIUMPH-1 PR에 간 수치 없음. CT.gov Results 미게시. 간은 P2 MASLD 블록.</small>",
        gi: "오심 4/9/12 mg<br><b>28.6% · 38.4% · 42.4%</b> vs 위약 14.8%<br>설사 25.2% · 34.1% · 32.0% vs 13.5%<br>변비 23.8% · 25.9% · 26.1% vs 10.9%<br>구토 10.6% · 22.8% · 25.3% vs 4.8%<br><small>Company PR · CT.gov Results 미게시</small><br>비-GI: dysesthesia 5.1% · 12.3% · 12.5% vs 0.9%",
        discontinuation: "<b>AE 중단</b> 4/9/12 mg<br><b>4.1% · 6.9% · 11.3%</b><br>위약 4.9%<br><small>Company PR · 전체 AE 중단</small><br><span class=\"result-empty\">[회사 미공개]</span> GI 단독 중단%<br><small>동일 PR에 GI-only % 없음 · CT.gov Results 미게시</small>",
        refs: {
          trial: ["RT-TRIUMPH1", "RT-NCT"],
          weight: ["RT-TRIUMPH1"],
          gi: ["RT-TRIUMPH1"],
          discontinuation: ["RT-TRIUMPH1"]
        }
      },
      {
        id: "p2_obesity",
        label: "Phase 2 비만",
        meta: "NCT04881760 · P2 · 24·48주 · 비만·과체중 · CT.gov Results",
        nct: "NCT04881760",
        hasLiver: false,
        // CT.gov Results: % body weight change week 48 (OG000–006)
        weight: "<b>12 mg 경로 48주 −24.2%</b><br>8 mg(4→8) −23.9% · 8 mg(2→8) −21.7%<br>4 mg −17.8% · 4 mg(2→4) −16.3%<br>1 mg −8.7% · 위약 −2.1%<br><small>CT.gov Results · mean % change baseline to week 48</small><br>24주 12 mg 경로 −17.4% · 위약 −1.6%",
        liver: "<span class=\"result-empty\">[CT.gov 본시험 미게시]</span><br><small>본 Results에 MRI-PDFF 표 없음. MASLD 하위는 옆 블록·Nat Med.</small>",
        gi: "오심(≥5% AE 표, CT.gov)<br>12 mg 경로 <b>45.2%</b> (28/62)<br>8 mg(4→8) 60.0% (21/35)<br>4 mg 36.4% (12/33) · 위약 11.4% (8/70)<br>구토 12 mg 19.4% · 8 mg(4→8) 25.7% · 위약 1.4%<br>설사 12 mg 14.5% · 변비 12 mg 16.1%<br><small>ClinicalTrials.gov other AE · freq threshold 5%</small>",
        discontinuation: "<b>AE로 탈락</b> (participant flow)<br>12 mg 경로 2/62 (3.2%) · 8 mg 암 각 1<br>1 mg 1/69 · 위약 0/70<br><small>CT.gov drop reason = Adverse Event</small><br><span class=\"result-empty\">[CT.gov 미분리]</span> GI 단독 중단%",
        refs: {
          trial: ["RT-P2-CTG"],
          weight: ["RT-P2-CTG"],
          gi: ["RT-P2-CTG"],
          discontinuation: ["RT-P2-CTG"]
        }
      },
      {
        id: "p2a_masld",
        label: "Phase 2a MASLD 간지방",
        meta: "NCT04881760 하위 · n=98 · Nat Med / PubMed",
        nct: "NCT04881760",
        hasLiver: true,
        weight: "<b>모체 P2 체중</b> CT.gov 블록 참고<br><small>하위 n=98 · 간 endpoint 논문</small>",
        liver: "<b>상대 간지방(MRI-PDFF) 24주</b><br>1 mg −42.9% · 4 mg −57.0%<br>8 mg −81.4% · <b>12 mg −82.4%</b><br>위약 +0.3%<br>정상 간지방(&lt;5%) 도달 24주 12 mg <b>86%</b><br><small>PubMed/Nat Med · 86%=정상 도달 비율(상대감소 아님)</small>",
        gi: "<span class=\"result-empty\">[1차 미확보]</span><br><small>하위 abstract에 GI 표 없음. 본시험 GI는 Phase 2 비만 블록(CT.gov).</small>",
        discontinuation: "<span class=\"result-empty\">[1차 미확보]</span><br><small>하위 abstract에 AE 중단 표 없음.</small>",
        refs: {
          trial: ["RT-LIVER-PM", "RT-LIVER-NM", "RT-P2-CTG"],
          weight: ["RT-P2-CTG"],
          liver: ["RT-LIVER-PM"],
          gi: ["RT-LIVER-PM"],
          discontinuation: ["RT-LIVER-PM"]
        }
      }
    ],
    rightsRefs: ["RT-TRIUMPH1", "RT-P2-CTG"]
  },
  cagrisema: {
    indication: "비만·과체중<br>T2D(REDEFINE 2 등)",
    rights: "Novo Nordisk<br>cagrilintide 2.4 mg + semaglutide 2.4 mg 고정용량 복합",
    next: "규제 경로<br>REDEFINE 3/4/11 등",
    nextNcts: ["NCT05567796"],
    defaultTrialId: "redefine1",
    trials: [
      {
        id: "redefine1",
        label: "REDEFINE 1",
        meta: "NCT05567796 · P3 · 68주 · 비만·과체중(비당뇨) · n=3417",
        nct: "NCT05567796",
        hasLiver: false,
        weight: "<b>CagriSema 2.4/2.4 −22.7%</b><br>위약 −2.3%<br><small>68주 · trial-product · NEJM/Company PR</small><br>treatment-policy: −20.4% vs 위약 −3.0%<br><small>CT.gov Results 미게시(감사 시점) · 피어 리뷰+PR</small>",
        liver: "<span class=\"result-empty\">[회사 미공개]</span><br><small>Novo REDEFINE 1 PR·CT.gov Results(미게시)에 간 핵심 수치 없음</small>",
        gi: "전체 GI AE <b>79.6%</b> vs 위약 39.9%<br>오심 55% vs 12.6%<br>변비 30.7% vs 11.6%<br>구토 26.1% vs 4.1%<br><small>Company PR (NEJM 동시) · CT.gov Results 미게시</small>",
        discontinuation: "<b>AE 중단 6%</b> vs 위약 3.7%<br><small>Company PR · 전체 AE 중단</small><br><span class=\"result-empty\">[회사 미공개]</span> GI 단독 중단%",
        refs: {
          trial: ["CS-REDEFINE1", "CS-NCT", "CS-SAFETY"],
          weight: ["CS-REDEFINE1", "CS-SAFETY"],
          gi: ["CS-SAFETY"],
          discontinuation: ["CS-SAFETY"]
        }
      },
      {
        id: "redefine2",
        label: "REDEFINE 2",
        meta: "P3 · 68주 · 비만·과체중 + T2D · n=1206",
        nct: null,
        hasLiver: false,
        weight: "<b>CagriSema −15.7%</b> vs 위약 −3.1%<br><small>68주 · trial-product · Company PR/NEJM Davies</small><br>treatment-policy: −13.7% vs 위약 −3.4%",
        liver: "<span class=\"result-empty\">[회사 미공개]</span><br><small>REDEFINE 2 PR에 간 약효 수치 없음</small>",
        gi: "REDEFINE 1과 유사하다고 PR에 명시<br><span class=\"result-empty\">[회사 미공개]</span> R2 단독 GI % 표<br><small>CT.gov Results 미게시 · PR에 R2 세부 GI 표 없음</small>",
        discontinuation: "<b>AE 중단 8.4%</b> vs 위약 3%<br><small>Company PR</small><br><span class=\"result-empty\">[회사 미공개]</span> GI 단독 중단%",
        refs: {
          trial: ["CS-SAFETY"],
          weight: ["CS-SAFETY"],
          gi: ["CS-SAFETY"],
          discontinuation: ["CS-SAFETY"]
        }
      }
    ],
    rightsRefs: ["CS-REDEFINE1", "CS-SAFETY"]
  },
  zenagamtide: {
    indication: "비만·과체중<br>T2D",
    rights: "Novo Nordisk · 구칭 amycretin<br>단일분자 GLP-1R+amylin · 경구·SC",
    next: "비만 Phase 3<br>경구 용량·제형",
    nextNcts: ["NCT06064006", "NCT06542874"],
    defaultTrialId: "amy_sc",
    trials: [
      {
        id: "amy_sc",
        label: "SC Phase 1b/2a 비만",
        meta: "NCT06064006 · P1b/2a · 최대 36주 · 비만·과체중",
        nct: "NCT06064006",
        hasLiver: false,
        weight: "<b>Zenagamtide SC 60 mg −24.3%</b><br>위약 −1.1%<br><small>36주 · Part B · Lancet/PubMed abstract</small><br>20 mg −22.0% vs 위약 +1.9% (36주)<br>5 mg −16.2% vs 위약 +2.3% (28주)<br>1.25 mg −9.7% vs 위약 +2.0% (20주)<br><small>CT.gov Results 미게시(감사 시점)</small>",
        liver: "<span class=\"result-empty\">[회사·Lancet abstract 미공개]</span><br><small>abstract·Novo 보도·CT.gov Results(미게시)에 간 수치 없음</small>",
        gi: "가장 흔한 TEAE: 위장관(오심·구토·설사 등)<br>대부분 경증~중등도 · 용량 의존 · 종료 시 해소 경향<br><small>Lancet abstract</small><br><span class=\"result-empty\">[1차 미확보]</span> 오심·구토·설사 개별 %",
        discontinuation: "중도 탈락 다수 · 상당수가 TEAE 무관 사유<br><small>Lancet abstract</small><br><span class=\"result-empty\">[1차 미확보]</span> 용량별 AE 중단%",
        refs: {
          trial: ["ZN-LANCET", "ZN-NCT"],
          weight: ["ZN-LANCET"],
          gi: ["ZN-LANCET"],
          discontinuation: ["ZN-LANCET"]
        }
      }
    ],
    rightsRefs: ["ZN-LANCET", "ZN-ADA"]
  },
  eloralintide: {
    indication: "비만·과체중",
    rights: "Eli Lilly · LY3841136<br>선택적 amylin 수용체 작용제 · 주 1회 SC",
    next: "Phase 3 (예: ENLIGHTEN 계열)<br>병용 전략",
    nextNcts: ["NCT06230523", "NCT07282600"],
    defaultTrialId: "eloralintide_p2",
    trials: [
      {
        id: "eloralintide_p2",
        label: "Phase 2 비만",
        meta: "NCT06230523 · P2 · 48주 · 비만·과체중(비당뇨) · n=263",
        nct: "NCT06230523",
        hasLiver: false,
        // 체중·GI: CT.gov Results. AE 중단: Lancet 본문 safety 표 (AE leading to discontinuation).
        weight: "<b>Eloralintide 9 mg −20.1%</b><br>6 mg −17.6% · 3 mg −12.4% · 1 mg −9.4%<br>6/9 mg −19.9% · 3/6/9 mg −16.5%<br>위약 −0.4%<br><small>CT.gov Results · primary · week 48</small>",
        liver: "<span class=\"result-empty\">[1차 미공개]</span><br><small>CT.gov Results·Lancet에 간 약효 수치 없음</small>",
        gi: "오심<br>1 mg 10.7% (3/28) · 3 mg 12.5% (3/24)<br>6 mg <b>64.3%</b> (18/28) · 9 mg 33.3% (18/54)<br>6/9 mg 54.2% (13/24) · 3/6/9 mg 25.0% (13/52)<br>위약 13.2% (7/53)<br>구토 6 mg 25.0% · 9 mg 11.1% · 위약 0%<br>설사 6 mg 35.7% · 9 mg 11.1% · 위약 9.4%<br>변비 9 mg 24.1% · 위약 5.7%<br>피로 9 mg 42.6% · 6/9 mg 45.8% · 위약 11.3%<br><small>CT.gov Results · AE ≥5%</small>",
        discontinuation: "<b>AE leading to discontinuation</b><br>위약 8% · 1 mg 11% · 3 mg 0% · <b>6 mg 21%</b><br>9 mg 7% · 6–9 mg 8% · 3–9 mg 12%<br>eloralintide 전 용량 합계 10% (21/208)<br><small>Billings et al. Lancet · NCT06230523</small><br><span class=\"result-empty\">[1차 미분리]</span> GI 단독 중단%",
        refs: {
          trial: ["EL-CTG", "EL-LANCET"],
          weight: ["EL-CTG"],
          gi: ["EL-CTG"],
          discontinuation: ["EL-LANCET"]
        }
      }
    ],
    rightsRefs: ["EL-CTG", "EL-LILLY"]
  },
  petrelintide: {
    indication: "비만·과체중 (±동반질환)",
    rights: "Zealand Pharma 발명 · Roche 공동개발·상업화 (2025)",
    next: "Phase 3 개시 (2026 하반기 계획)<br>ZUPREME-2 T2D 결과",
    nextNcts: ["NCT06662539", "NCT06926842"],
    defaultTrialId: "zupreme1",
    trials: [
      {
        id: "zupreme1",
        label: "ZUPREME-1",
        meta: "NCT06662539 · P2 · 42주 · 비만·과체중 · n=493",
        nct: "NCT06662539",
        hasLiver: false,
        // CT.gov Results 미게시 → 회사 PR(T3)
        weight: "<b>Petrelintide 최대 −10.7%</b> vs 위약 −1.7%<br><small>42주 · efficacy estimand · 최대 유효 용량 암</small><br>28주 primary에서도 전 용량 위약 대비 유의<br><small>Roche PR (2026-03-05) · CT.gov Results 미게시</small>",
        liver: null,
        gi: "가장 흔한 AE: 위장관 (대부분 경증)<br>구토: 전 용량 합이 위약보다 낮음 · 최대 유효 용량 암 <b>구토 0</b><br>설사·변비: 위약과 유사 (한 자리 %대)<br>오심: P1b(2주 증량)보다 감소 · 유지 용량 도달 후 거의 없음<br><span class=\"result-empty\">[회사 미공개]</span> 용량별 오심 % 표<br><small>Roche PR · CT.gov Results 미게시</small>",
        discontinuation: "<b>AE 중단</b> 최대 유효 용량 암 <b>4.8%</b> vs 위약 4.9%<br>GI AE로 인한 중단: 최대 유효 용량 암 0 (회사 명시)<br>임의 사유 철회 8.4% (약물 암 합) vs 위약 13.6%<br><small>Roche PR · GI 단독 중단은 0건으로 명시된 용량 암 기준</small>",
        refs: {
          trial: ["PT-ROCHE", "PT-NCT"],
          weight: ["PT-ROCHE"],
          gi: ["PT-ROCHE"],
          discontinuation: ["PT-ROCHE"]
        }
      }
    ],
    rightsRefs: ["PT-ROCHE"]
  },
  azd6234: {
    indication: "비만·과체중<br>T2D 병용·AZD9550 병용 탐색",
    rights: "AstraZeneca 내부 개발<br>선택적 amylin (SARA) · 주 1회 SC",
    next: "APRICUS P2 결과 공개<br>ASCEND 등 AZD9550 병용 결과",
    nextNcts: ["NCT06595238", "NCT06851858", "NCT05511025"],
    defaultTrialId: "apricus",
    trials: [
      {
        id: "apricus",
        label: "APRICUS Phase 2",
        meta: "NCT06595238 · P2 · 비만·과체중+동반질환 · n=262",
        nct: "NCT06595238",
        hasLiver: false,
        weight: "<span class=\"result-empty\">[회사·CT.gov 미공개]</span> 용량별 % 체중<br><small>P2 완료(등록상). Results·토플라인 % 미게시(감사 시점)</small>",
        liver: null,
        gi: "<span class=\"result-empty\">[1차 미확보]</span> 용량별 GI % 표<br><small>P1 공개 요약: 오심·구토·식욕감소가 위약 대비 더 흔함(세부 % 미확보)</small>",
        discontinuation: "<span class=\"result-empty\">[1차 미확보]</span><br><small>CT.gov Results 미게시 · AE 중단 % 1차 표 없음</small>",
        refs: {
          trial: ["AZ-6234-APRICUS"],
          weight: ["AZ-6234-APRICUS"],
          gi: ["AZ-6234-P1"],
          discontinuation: ["AZ-6234-APRICUS"]
        }
      },
      {
        id: "p1_sad",
        label: "Phase 1 SAD",
        meta: "NCT05511025 · P1 · 과체중·비만 건강 지원자 · n=54",
        nct: "NCT05511025",
        hasLiver: false,
        weight: "체중 감소: 위약 대비 <b>통계적 유의</b> (회사·학회 요약)<br><span class=\"result-empty\">[회사 미공개]</span> 용량별 %·kg<br><small>CT.gov Results 미게시</small>",
        liver: null,
        gi: "오심·구토·식욕감소가 주된 AE 경향<br>중대한 사망·SAE 없음 (P1 요약)<br><span class=\"result-empty\">[1차 미확보]</span> 개별 % 표",
        discontinuation: "<span class=\"result-empty\">[1차 미확보]</span>",
        refs: {
          trial: ["AZ-6234-P1"],
          weight: ["AZ-6234-P1"],
          gi: ["AZ-6234-P1"],
          discontinuation: ["AZ-6234-P1"]
        }
      }
    ],
    rightsRefs: ["AZ-6234-APRICUS", "AZ-6234-COMBO"]
  },
  cagrilintide: {
    indication: "비만·과체중<br>T2D 단독 프로그램 병행",
    rights: "Novo Nordisk · AM833 / NNC0174-0833<br>CagriSema 구성 성분 · 단독 개발 병행",
    next: "단독 Phase 3 결과<br>CagriSema 규제와 포지셔닝",
    nextNcts: ["NCT03856047", "NCT07220642", "NCT07220759", "NCT05567796"],
    defaultTrialId: "p2_26w",
    trials: [
      {
        id: "p2_26w",
        label: "Phase 2 용량탐색 26주",
        meta: "NCT03856047 · P2 · 26주 · 비만·과체중(비당뇨) · n=706",
        nct: "NCT03856047",
        hasLiver: false,
        weight: "<b>Cagrilintide 4.5 mg −10.8%</b><br>2.4 mg −9.5% · 1.2 mg −8.5%<br>0.6 mg −6.9% · 0.3 mg −6.1%<br>위약 −3.0% · 리라글루타이드 3.0 mg −8.5%<br><small>CT.gov Results · mean % · 26주</small><br>≥5% 감량 4.5 mg 88.7% · 위약 30.9%",
        liver: null,
        gi: "오심<br>4.5 mg <b>46.5%</b> (47/101) · 2.4 mg 31.4% (32/102)<br>1.2 mg 36.3% · 0.6 mg 27.0% · 위약 17.8% (18/101)<br>구토 4.5 mg 7.9% · 2.4 mg 8.8% · 위약 3.0%<br>설사 2.4 mg 17.6% · 4.5 mg 6.9% · 위약 8.9%<br>변비 4.5 mg 20.8% · 2.4 mg 16.7% · 위약 6.9%<br><small>CT.gov Results · other AE</small>",
        discontinuation: "전체 중도 철회 약 4% (논문 보고 n=29)<br><span class=\"result-empty\">[CT.gov 미분리]</span> AE 사유별 탈락 표 없음<br><small>participant flow에 AE drop reason 미게시 · Lau et al. Lancet</small>",
        refs: {
          trial: ["CG-P2-CTG", "CG-P2-LANCET"],
          weight: ["CG-P2-CTG"],
          gi: ["CG-P2-CTG"],
          discontinuation: ["CG-P2-LANCET", "CG-P2-CTG"]
        }
      },
      {
        id: "redefine1_mono",
        label: "REDEFINE 1 단독 암",
        meta: "NCT05567796 · P3 프로그램 내 cagrilintide 2.4 mg 단독 · 68주",
        nct: "NCT05567796",
        hasLiver: false,
        weight: "<b>Cagrilintide 2.4 mg −11.8%</b> vs 위약 −2.3%<br><small>68주 · trial-product · REDEFINE 1 구성 암</small><br>treatment-policy 계열: −11.5% vs 위약 −3.0% (공개 요약)<br><small>Company PR / NEJM CagriSema 프로그램 · 단독 암</small>",
        liver: null,
        gi: "CagriSema 행의 복합 GI와 분리된 단독 암 세부 표는 별도<br><span class=\"result-empty\">[1차 미확보]</span> 단독 암 오심·구토 % 표<br><small>복합제 전체 GI 79.6%는 CagriSema 블록 참고</small>",
        discontinuation: "<span class=\"result-empty\">[1차 미확보]</span> 단독 암 AE 중단 % 표<br><small>복합 프로그램 PR·논문은 CagriSema 중심</small>",
        refs: {
          trial: ["CG-REDEFINE-MONO", "CS-NCT"],
          weight: ["CG-REDEFINE-MONO"],
          gi: ["CG-REDEFINE-MONO"],
          discontinuation: ["CG-REDEFINE-MONO"]
        }
      }
    ],
    rightsRefs: ["CG-P2-LANCET", "CG-REDEFINE-MONO"]
  }
};

function loadSelectedTrials() {
  try {
    const map = JSON.parse(localStorage.getItem(TRIAL_SELECT_STORAGE_KEY) || "{}") || {};
    // 구 trial id 약어(elo_p2) → 정식 id (localStorage 호환)
    if (map.eloralintide === "elo_p2") map.eloralintide = "eloralintide_p2";
    return map;
  } catch {
    return {};
  }
}

function saveSelectedTrial(assetId, trialId) {
  const map = loadSelectedTrials();
  map[assetId] = trialId;
  localStorage.setItem(TRIAL_SELECT_STORAGE_KEY, JSON.stringify(map));
}

function getComparisonEntry(assetId) {
  return comparison[assetId] || null;
}

/** 승격된 초안 임상 (런타임 병합). 파일/API 또는 localStorage. */
let promotedTrialsByAsset = {};
let trialDraftStore = { schemaVersion: 1, drafts: [] };
const TRIAL_DRAFT_STORAGE_KEY = "competitor-trial-drafts-v1";

function getComparisonTrials(entry, assetId) {
  const base = Array.isArray(entry?.trials) ? [...entry.trials] : [];
  if (!assetId) return base;
  const extra = promotedTrialsByAsset[assetId] || [];
  const out = [...base];
  for (const trial of extra) {
    if (!out.some(b => (trial.nct && b.nct === trial.nct) || b.id === trial.id)) out.push(trial);
  }
  return out;
}

function getCuratedNctsByAsset() {
  const map = {};
  for (const [assetId, entry] of Object.entries(comparison)) {
    map[assetId] = (entry.trials || []).map(t => t.nct).filter(Boolean);
  }
  return map;
}

/**
 * 핵심 임상 원장 무결성.
 * - trials[] 없으면 드롭다운/결과 연동 불가
 * - defaultTrialId 보정
 * - hasLiver와 liver 필드 정합
 * 효능 수치는 자동 생성하지 않는다 (사람이 큐레이션한 블록만 사용).
 */
function normalizeComparisonEntries() {
  for (const entry of Object.values(comparison)) {
    if (!entry || !Array.isArray(entry.trials) || !entry.trials.length) continue;
    if (!entry.defaultTrialId || !entry.trials.some(t => t.id === entry.defaultTrialId)) {
      entry.defaultTrialId = entry.trials[0].id;
    }
    for (const trial of entry.trials) {
      if (trial.hasLiver === undefined) trial.hasLiver = Boolean(trial.liver);
      if (trial.hasLiver === false) trial.liver = trial.liver || null;
      for (const key of TRIAL_RESULT_KEYS) {
        if (!(key in trial)) trial[key] = key === "liver" ? null : null;
      }
    }
  }
}

function getSelectedTrialId(assetId, entry) {
  const trials = getComparisonTrials(entry, assetId);
  if (!trials.length) return null;
  const stored = loadSelectedTrials()[assetId];
  if (stored && trials.some(t => t.id === stored)) return stored;
  if (entry.defaultTrialId && trials.some(t => t.id === entry.defaultTrialId)) return entry.defaultTrialId;
  return trials[0].id;
}

function getActiveTrial(assetId, entry) {
  const trials = getComparisonTrials(entry, assetId);
  const id = getSelectedTrialId(assetId, entry);
  return trials.find(t => t.id === id) || trials[0] || null;
}

function trialPublishesLiver(t) {
  // liver 필드에 수치 또는 [회사 미공개]/[1차 미확보] 설명이 있으면 표시
  return Boolean(t && t.liver != null && t.liver !== "");
}

/** 드롭다운: 큐레이션+승격 임상이 2개 이상일 때 */
function shouldShowTrialSelect(entry, assetId) {
  return getComparisonTrials(entry, assetId).length > 1;
}

/**
 * 갱신 후 핵심 임상 연동 감사.
 * 자동 승격은 하지 않고, 큐레이션 NCT가 스냅샷에 있는지·결과 블록이 온전한지만 확인.
 */
function auditKeyTrialBinding(snapshot) {
  const issues = [];
  for (const [assetId, entry] of Object.entries(comparison)) {
    const trials = getComparisonTrials(entry, assetId);
    if (!trials.length) continue;
    if (trials.length > 1 && !entry.defaultTrialId) {
      issues.push(`${assetId}: multi-trial without defaultTrialId`);
    }
    for (const trial of trials) {
      for (const key of TRIAL_RESULT_KEYS) {
        if (!(key in trial)) issues.push(`${assetId}/${trial.id}: missing result key ${key}`);
      }
      if (!trial.nct || !snapshot?.programs?.[assetId]) continue;
      const found = (snapshot.programs[assetId].studies || []).some(s => s.nctId === trial.nct);
      if (!found) issues.push(`${assetId}/${trial.id}: ${trial.nct} not in refresh snapshot`);
    }
  }
  if (issues.length && typeof console !== "undefined") {
    console.warn("[key-trial-binding]", issues);
  }
  return issues;
}

/**
 * 자산 데이터 정합 감사 (새 약물·새 기전 추가 시 조용한 누락 방지).
 *
 * 이 프로젝트는 키 공간이 두 개다. 섞어 쓰면 화면에서 조용히 사라진다:
 *   - id  기준: comparison[id], mechanismProfiles[id], refresh-config programs[].id
 *   - name 기준: assetReferenceMap[name], events[].asset, timelineExcludedAssets
 * 실제 사고: events[].asset="DD01"인데 assets[].name="Zabopegdutide"라서
 * 근거 있는 이벤트 3건이 타임라인에 렌더되지 않았다(2026-07-26 수정).
 *
 * 자동 보정하지 않는다. 추정으로 값을 채우면 사실이 아닌 정보가 표에 들어간다.
 * 누락을 찾아 보고만 하고, 채우는 것은 사람이 1차 출처로 한다.
 */
function auditAssetDataIntegrity() {
  const issues = [];
  const names = new Set(assets.map(a => a.name));
  for (const a of assets) {
    if (!comparison[a.id]) issues.push(`${a.id}: comparison[${a.id}] 없음 → 적응증·핵심임상·결과 전부 빈칸`);
    if (!(mechanismProfiles[a.id]?.targets || []).length) {
      issues.push(`${a.id}: mechanismProfiles[${a.id}].targets 없음 → 기전 표적 필터에서 누락(해당 표적으로 거르면 사라짐)`);
    }
    if (!(assetReferenceMap[a.name] || []).length) {
      issues.push(`${a.id}: assetReferenceMap["${a.name}"] 없음 → 근거 배지 없음 (map은 id가 아니라 name 키)`);
    }
    if (!a.mechanism) issues.push(`${a.id}: mechanism 없음 → 기전 축 분류 불가`);
  }
  // events[].asset 은 name 기준. 오타·별칭을 쓰면 이벤트가 조용히 사라진다.
  for (const e of events) {
    if (!names.has(e.asset)) {
      issues.push(`events: asset="${e.asset}" (${e.year} ${e.title}) 이 assets[].name과 불일치 → 일정 탭에 렌더되지 않음`);
    }
  }
  // 일정 제외 목록도 name 기준
  for (const n of timelineExcludedAssets) {
    if (!names.has(n)) issues.push(`timelineExcludedAssets: "${n}" 이 assets[].name과 불일치 → 제외가 동작하지 않음`);
  }
  if (issues.length && typeof console !== "undefined") {
    console.warn("[asset-data-integrity]", issues);
  }
  return issues;
}

function missingForTrial(label) {
  // 해당 임상에 결과 없으면 설명 없이 없음만 표기 (결과 기준 스탬프가 임상을 이미 표시)
  // result-empty: 본문과 동일 글씨체·크기, 색만 muted로 구분 (muted-cell의 Consolas 사용 금지)
  return `<span class="result-empty">${label} 공개값 없음</span>`;
}

function hasTrialField(trial, key) {
  if (!trial) return false;
  const value = trial[key];
  return value != null && value !== "";
}

/**
 * 선택 임상 한 블록 → TRIAL_RESULT_KEYS 전체 해석.
 * 새 결과 키가 binding에 추가되면 여기 루프에 자동 포함.
 * 다른 임상·자산 signal·등록 API로 폴백하지 않는다.
 */
function resolveTrialResults(trial) {
  const out = {};
  for (const key of TRIAL_RESULT_KEYS) {
    if (key === "liver") {
      out.liver = trialPublishesLiver(trial) ? trial.liver : null;
    } else {
      out[key] = hasTrialField(trial, key) ? trial[key] : null;
    }
  }
  return out;
}

/** 선택 임상에 묶인 모든 결과 칸 공통 스탬프 */
function resultBoundStamp(trial) {
  if (!trial) {
    return `<div class="result-bound muted" title="선택 임상 없음">기준 임상 없음</div>`;
  }
  return `<div class="result-bound" title="이 칸 결과는 선택한 핵심 임상 블록">기준 ${escapeHtml(trial.label)}</div>`;
}

/**
 * 결과 열 공통 렌더. isTrialResultKey 인 칸만 호출한다.
 * 스탬프는 결과 열이면 항상 붙임 (향후 열 추가 시 자동).
 */
function renderResultCell(trial, key, htmlOrNull, refsHtml) {
  if (!isTrialResultKey(key)) {
    console.warn("[renderResultCell] non-result key", key);
  }
  const label = RESULT_FIELD_LABELS[key] || key;
  let body;
  if (htmlOrNull != null && htmlOrNull !== "") {
    body = htmlOrNull;
  } else {
    body = missingForTrial(label);
  }
  // body HTML에 NCT가 있으면 인용 링크 보조
  const nctBits = htmlOrNull ? nctCitations(String(htmlOrNull)) : "";
  const stamp = resultBoundStamp(trial);
  return `${stamp}<div class="result-body" data-result-key="${escapeHtml(key)}" data-trial-id="${escapeHtml(trial?.id || "")}" data-trial-binding="dependent">${body}</div>${htmlOrNull ? refsHtml : ""}${nctBits}`;
}

/** thead dependent 열과 TRIAL_RESULT_KEYS 정합 검사 (개발 시 누락 방지) */
function auditMasterResultColumns() {
  const table = document.querySelector(".master-table");
  if (!table) return [];
  const dependentKeys = [...table.querySelectorAll("thead th[data-trial-binding='dependent']")]
    .map(th => th.dataset.columnKey)
    .filter(Boolean);
  const issues = [];
  for (const key of dependentKeys) {
    if (!isTrialResultKey(key)) {
      issues.push(`thead dependent "${key}" not in TRIAL_RESULT_KEYS (binding 누락 또는 next 등 asset 열 오표기)`);
    }
  }
  for (const key of TRIAL_RESULT_KEYS) {
    if (!dependentKeys.includes(key)) {
      issues.push(`TRIAL_RESULT_KEYS "${key}" missing thead th[data-trial-binding=dependent]`);
    }
  }
  if (issues.length) console.warn("[master-result-columns]", issues);
  return issues;
}

function renderTrialCell(assetId, entry, trial, rowRefs) {
  const trials = getComparisonTrials(entry, assetId);
  const showSelect = shouldShowTrialSelect(entry, assetId);
  const refs = cite(trial?.refs?.trial || rowRefs);
  const nctBits = nctCitations(`${trial?.nct || ""} ${trial?.meta || ""}`);
  // 등록 감시는 현재 단계 칸(applyLiveRows)에만 표시. 핵심 임상 칸은 선택·meta만.
  if (!trial) {
    return `<div class="trial-block"><div class="trial-name">임상 미지정</div></div>`;
  }
  // 이름 행: 드롭다운 유무와 관계없이 동일 블록 구조 + meta 줄 동일 글씨
  let nameRow;
  if (showSelect) {
    const options = trials.map(t => {
      const selected = t.id === trial.id ? " selected" : "";
      return `<option value="${t.id}"${selected}>${escapeHtml(t.label)}</option>`;
    }).join("");
    nameRow = `<select class="trial-select trial-name-control" data-asset-id="${assetId}" aria-label="${escapeHtml(assetId)} 핵심 임상 선택">${options}</select>`;
  } else {
    nameRow = `<div class="trial-name trial-name-control">${escapeHtml(trial.label)}</div>`;
  }
  return `<div class="trial-block">
    ${nameRow}
    <div class="trial-meta-line">${escapeHtml(trial.meta || "")}<span class="cell-refs">${refs}</span>${nctBits}</div>
  </div>`;
}

normalizeComparisonEntries();

/**
 * 기전 상세 (자산 단위).
 * targets: 수용체 코드 배열. format: unimolecular | fixed-combo | other.
 * ratio: 공개 활성비만 (없으면 null). text: 분자 설계 HTML.
 * 스키마: docs/PLATFORM_SCHEMA.md
 */
const mechanismProfiles = {
  mazdutide: {
    targets: ["GLP-1R", "GCGR"],
    format: "unimolecular",
    ratio: null,
    text: "<b>Mammalian oxyntomodulin analogue</b><br>지방산 side chain 기반 장기지속 peptide<br>GLP-1R:GCGR functional ratio: <b>공개 수치 없음</b>",
    refs: ["MZ-DESIGN"]
  },
  survodutide: {
    targets: ["GLP-1R", "GCGR"],
    format: "unimolecular",
    ratio: "8:1",
    text: "<b>장기지속 단일분자 peptide</b><br>GLP-1R:GCGR ≈ <b>8:1</b><br><small>human plasma functional assay</small>",
    refs: ["SV-DESIGN"]
  },
  tirzepatide: {
    targets: ["GLP-1R", "GIP"],
    format: "unimolecular",
    text: "GIP·GLP-1 수용체 <b>이중 작용</b> 펩타이드. GIP 쪽으로 치우친 불균형 작용으로 보고된다.",
    refs: ["TZ-SURMOUNT1"]
  },
  enicepatide: {
    targets: ["GLP-1R", "GIP"],
    format: "unimolecular",
    text: "GLP-1/GIP <b>이중 작용</b>. 신호 편향(signaling-biased) 설계로 기술된다.",
    refs: ["EN-P2PR"]
  },
  vk2735: {
    targets: ["GLP-1R", "GIP"],
    format: "unimolecular",
    text: "GLP-1/GIP <b>이중 작용</b> 펩타이드. 피하·경구 두 제형으로 개발 중이다.",
    refs: ["VK-VENTURE"]
  },
  ribupatide: {
    targets: ["GLP-1R", "GIP"],
    format: "unimolecular",
    text: "GLP-1/GIP <b>이중 작용</b> 펩타이드. 주 1회 주사와 1일 1회 경구정을 함께 개발한다.",
    refs: ["RB-ORAL"]
  },
  maritide: {
    targets: ["GLP-1R", "GIPR(길항)"],
    format: "other",
    text: "★ 같은 GIP 축이지만 <b>작용 방향이 반대</b>다. 항GIPR 단일클론항체에 GLP-1 유사체 2개를 접합한 이중특이 분자로, GLP-1R는 <b>작용</b>·GIPR는 <b>길항</b>한다. 다른 4개(이중 작용제)와 같은 축으로 묶여 있으나 기전 해석은 분리해서 본다.",
    refs: ["MT-MECH", "MT-NEJM"]
  },
  pemvidutide: {
    targets: ["GLP-1R", "GCGR"],
    format: "unimolecular",
    ratio: "1:1",
    text: "<b>29-aa 단일분자 peptide</b><br>glycolipid surfactant/EuPort 반감기 연장<br>GLP-1R:GCGR = <b>1:1</b>",
    refs: ["PM-DESIGN"]
  },
  efino: {
    targets: ["GLP-1R", "GCGR"],
    format: "unimolecular",
    ratio: null,
    text: "<b>Modified OXM–PEG–IgG4 Fc conjugate</b><br>양 수용체 comparable potency<br>정확한 수치: <b>공개 없음</b>",
    refs: ["EF-DESIGN", "RATIO-REVIEW"]
  },
  azd9550: {
    targets: ["GLP-1R", "GCGR"],
    format: "unimolecular",
    ratio: null,
    text: "<b>GLP-1R/GCGR 단일분자 이중작용제</b><br>parent scaffold·functional ratio: <b>공개 없음</b>",
    refs: ["AZ-ASCEND"]
  },
  dd01: {
    targets: ["GLP-1R", "GCGR"],
    format: "unimolecular",
    ratio: "11:1",
    text: "<b>Proprietary 장기지속 peptide</b><br>GLP-1R:GCGR = <b>11:1</b>",
    refs: ["DD-RATIO"]
  },
  cms: {
    targets: ["GLP-1R", "GCGR"],
    format: "unimolecular",
    ratio: null,
    text: "<b>GLP-1R/GCGR 이중작용제</b><br>parent scaffold·functional ratio: <b>공개 없음</b>",
    refs: ["CMS-IND", "CMS-ANNUAL"]
  },
  da1726: {
    targets: ["GLP-1R", "GCGR"],
    format: "unimolecular",
    ratio: "3:1",
    text: "<b>Oxyntomodulin analogue</b><br>GLP-1R:GCGR = <b>3:1</b><br><small>회사 공개 receptor-activity ratio</small>",
    refs: ["DA-RATIO"]
  },
  pb718: {
    targets: ["GLP-1R", "GCGR"],
    format: "fixed-combo",
    ratio: null,
    text: "<b>PB-119 GLP-1RA + PB-722 GCGR agonist</b><br>고정용량 복합제 · 단일분자 아님<br>성분·활성비: <b>공개 수치 없음</b>",
    refs: ["PB-ABSTRACT", "PB-ANNUAL"]
  },
  cotadutide: {
    targets: ["GLP-1R", "GCGR"],
    format: "unimolecular",
    ratio: "5:1",
    text: "<b>OXM 기반 synthetic linear peptide</b><br>GLP-1R:GCGR = <b>5:1</b> in vitro<br>human plasma에서 약 <b>8:1</b>",
    refs: ["COT-P2", "SV-DESIGN"]
  },
  nn1177: {
    targets: ["GLP-1R", "GCGR"],
    format: "unimolecular",
    ratio: "3:1",
    text: "<b>장기지속 GLP-1R/GCGR peptide</b><br>GLP-1R:GCGR ≈ <b>3:1</b><br><small>human plasma functional assay</small>",
    refs: ["NN-P1", "SV-DESIGN"]
  },
  sar425899: {
    targets: ["GLP-1R", "GCGR"],
    format: "unimolecular",
    ratio: null,
    text: "<b>Synthetic dual-agonist polypeptide</b><br>양 수용체 유사 potency로 보고<br>표준화된 ratio: <b>공개 없음</b>",
    refs: ["SAR-P1", "RATIO-REVIEW"]
  },
  opk88003: {
    targets: ["GLP-1R", "GCGR"],
    format: "unimolecular",
    ratio: null,
    text: "<b>장기지속 oxyntomodulin analogue</b><br>GLP-1R:GCGR ratio: <b>공개 수치 없음</b>",
    refs: ["OPK-TRIAL", "CLASS-REVIEW"]
  },
  g3215: {
    targets: ["GLP-1R", "GCGR"],
    format: "unimolecular",
    ratio: null,
    text: "<b>GLP-1R/GCGR co-agonist peptide</b><br>adaptive continuous infusion 개발<br>functional ratio: <b>공개 수치 없음</b>",
    refs: ["G3215-P1"]
  },
  retatrutide: {
    targets: ["GLP-1R", "GIP", "GCGR"],
    format: "unimolecular",
    ratio: null,
    text: "<b>단일분자 triple agonist peptide</b><br>GLP-1R · GIP · GCGR<br>활성비 공개 표준값: <b>없음</b>",
    refs: ["RT-TRIUMPH1"]
  },
  cagrisema: {
    targets: ["GLP-1R", "amylin"],
    format: "fixed-combo",
    ratio: null,
    text: "<b>cagrilintide 2.4 mg + semaglutide 2.4 mg</b><br>고정용량 복합 · 주 1회 SC<br>단일분자 아님",
    refs: ["CS-REDEFINE1"]
  },
  zenagamtide: {
    targets: ["GLP-1R", "amylin"],
    format: "unimolecular",
    ratio: null,
    text: "<b>단일분자 GLP-1R + amylin dual</b><br>구칭 amycretin<br>경구·피하 제형 병행 개발",
    refs: ["ZN-LANCET", "ZN-ADA"]
  },
  eloralintide: {
    targets: ["amylin"],
    format: "unimolecular",
    ratio: null,
    text: "<b>선택적 amylin 수용체 작용제</b><br>주 1회 SC · GLP-1 비함유<br>코드명 LY3841136",
    refs: ["EL-LILLY", "EL-LANCET"]
  },
  petrelintide: {
    targets: ["amylin"],
    format: "unimolecular",
    ratio: null,
    text: "<b>장기 amylin 유사체 (DACRA 계열)</b><br>주 1회 SC · ZP8396<br>중성 pH 안정 · 병용 제형 가능 설계",
    refs: ["PT-ROCHE"]
  },
  azd6234: {
    targets: ["amylin"],
    format: "unimolecular",
    ratio: null,
    text: "<b>선택적 amylin 수용체 작용제 (SARA)</b><br>주 1회 SC · AZ 파이프라인<br>lean mass 보존 목표 공개",
    refs: ["AZ-6234-APRICUS"]
  },
  cagrilintide: {
    targets: ["amylin"],
    format: "unimolecular",
    ratio: null,
    text: "<b>장기 amylin 유사체</b><br>AMY subtype + calcitonin 수용체 친화<br>주 1회 SC · CagriSema 구성 성분",
    refs: ["CG-P2-LANCET"]
  }
};

/** 기전 칸: 배지(자산.mechanism) + targets 칩(클릭=필터 토글) + 상세 text */
function renderMechanismCell(asset, rowRefs) {
  const profile = mechanismProfiles[asset.id] || {};
  const group = asset.mechanism || "기전 미지정";
  const targets = Array.isArray(profile.targets) ? profile.targets : [];
  const targetsHtml = targets.length
    ? `<div class="mech-targets">${targets.map(t => {
      const on = selectedTargets.has(t) ? " is-active" : "";
      return `<button type="button" class="mech-target${on}" data-target="${escapeHtml(t)}" title="표적 필터 토글: ${escapeHtml(t)}">${escapeHtml(t)}</button>`;
    }).join("")}</div>`
    : "";
  const text = profile.text || "공개 분자설계 정보 없음";
  const refs = profile.refs || rowRefs || [];
  return `<div class="mech-group">${escapeHtml(group)}</div>${targetsHtml}<div class="mech-detail">${text}</div><span class="cell-refs">${cite(refs)}</span>`;
}

/**
 * 기전 표적 필터 (표시 항목과 같은 호버 메뉴).
 * - 표적 0개 선택: 전체
 * - 1개: 그 표적을 가진 물질 전부
 * - 2개 이상: 선택한 표적을 모두 가진 물질만 (AND)
 * 데이터: mechanismProfiles[id].targets[]
 */
const TARGET_FILTER_STORAGE_KEY = "competitor-selected-targets-v1";
let selectedTargets = new Set();
try {
  const raw = localStorage.getItem(TARGET_FILTER_STORAGE_KEY);
  selectedTargets = new Set(raw ? JSON.parse(raw) : []);
} catch {
  selectedTargets = new Set();
}

function assetTargets(assetId) {
  const t = mechanismProfiles[assetId]?.targets;
  return Array.isArray(t) ? t : [];
}

function uniqueTargets() {
  const set = new Set();
  for (const a of assets) {
    for (const t of assetTargets(a.id)) if (t) set.add(t);
  }
  return [...set].sort((a, b) => a.localeCompare(b, "en"));
}

function saveSelectedTargets() {
  localStorage.setItem(TARGET_FILTER_STORAGE_KEY, JSON.stringify([...selectedTargets]));
}

function assetMatchesTargetFilter(asset) {
  if (!selectedTargets.size) return true;
  const have = new Set(assetTargets(asset.id));
  for (const t of selectedTargets) {
    if (!have.has(t)) return false;
  }
  return true;
}

/** 표적 필터 정렬: 선택 표적만 가진 물질(정확 일치) → 추가 표적 적은 순 → stage 높은 순 */
function targetFilterSortKey(asset) {
  const have = assetTargets(asset.id);
  const haveSet = new Set(have);
  const selected = [...selectedTargets];
  const exact =
    selected.length > 0 &&
    have.length === selected.length &&
    selected.every(t => haveSet.has(t));
  const extra = have.filter(t => !selectedTargets.has(t)).length;
  return {
    exactRank: exact ? 0 : 1,
    extra,
    stage: Number(asset.stage) || 0,
    name: asset.name || ""
  };
}

function compareAssetsForMaster(a, b) {
  // 표적 미선택: assets[] 등록 순서 유지 (마음에 드는 기본 순서)
  if (!selectedTargets.size) return 0;
  const ka = targetFilterSortKey(a);
  const kb = targetFilterSortKey(b);
  if (ka.exactRank !== kb.exactRank) return ka.exactRank - kb.exactRank;
  if (ka.extra !== kb.extra) return ka.extra - kb.extra;
  if (kb.stage !== ka.stage) return kb.stage - ka.stage;
  return ka.name.localeCompare(kb.name, "en");
}

function updateTargetToggleLabel() {
  const n = selectedTargets.size;
  const labels = [...selectedTargets].sort((a, b) => a.localeCompare(b, "en"));
  const text = !n ? "표적 전체" : n <= 2 ? labels.join(" · ") : `표적 ${n}개 AND`;
  const title = !n ? "기전 표적 필터 (전체)" : `AND 필터: ${labels.join(" + ")}`;
  document.querySelectorAll("#targetToggle, #timelineTargetToggle").forEach(btn => {
    btn.textContent = text;
    btn.title = title;
    btn.classList.toggle("has-filter", n > 0);
  });
}

function refreshViewsAfterTargetFilter() {
  renderMaster();
  renderTimeline();
}

function toggleTarget(target, on) {
  if (!target) return;
  if (on == null) {
    if (selectedTargets.has(target)) selectedTargets.delete(target);
    else selectedTargets.add(target);
  } else if (on) selectedTargets.add(target);
  else selectedTargets.delete(target);
  saveSelectedTargets();
  syncTargetMenuCheckboxes();
  updateTargetToggleLabel();
  refreshViewsAfterTargetFilter();
}

function syncTargetMenuCheckboxes() {
  document.querySelectorAll("#targetMenuList input[type='checkbox'][data-target], #timelineTargetMenuList input[type='checkbox'][data-target]").forEach(input => {
    input.checked = selectedTargets.has(input.dataset.target);
  });
}

function wireTargetFilterRoot({ rootSel, listSel, menuSel, toggleSel, clearSel }) {
  const list = document.querySelector(listSel);
  const menu = document.querySelector(menuSel);
  const selector = document.querySelector(rootSel);
  const toggle = document.querySelector(toggleSel);
  const clearBtn = document.querySelector(clearSel);
  if (!list || !menu || !selector || !toggle) return false;

  const targets = uniqueTargets();
  list.innerHTML = targets.map(t => `
    <label class="column-option target-option">
      <input type="checkbox" data-target="${escapeHtml(t)}" ${selectedTargets.has(t) ? "checked" : ""}>
      <span>${escapeHtml(t)}</span>
    </label>`).join("") || `<p class="target-menu-note">등록된 표적 없음 (mechanismProfiles.targets)</p>`;

  let closeTimer;
  const openMenu = () => {
    clearTimeout(closeTimer);
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
  };
  const closeMenu = () => {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  };

  list.addEventListener("change", event => {
    const input = event.target.closest("input[data-target]");
    if (!input) return;
    toggleTarget(input.dataset.target, input.checked);
  });
  clearBtn?.addEventListener("click", () => {
    selectedTargets.clear();
    saveSelectedTargets();
    syncTargetMenuCheckboxes();
    updateTargetToggleLabel();
    refreshViewsAfterTargetFilter();
  });
  toggle.addEventListener("click", () => {
    if (menu.hidden) openMenu();
    else closeMenu();
  });
  selector.addEventListener("mouseenter", openMenu);
  selector.addEventListener("mouseleave", () => {
    closeTimer = setTimeout(closeMenu, 180);
  });
  menu.addEventListener("mouseenter", () => clearTimeout(closeTimer));
  menu.addEventListener("mouseleave", () => {
    closeTimer = setTimeout(closeMenu, 180);
  });
  document.addEventListener("click", event => {
    if (event.target.closest(rootSel)) return;
    closeMenu();
  });
  return true;
}

function initTargetFilter() {
  // 비교표 + 일정 탭: 같은 selectedTargets 공유 (기전 표적 AND)
  wireTargetFilterRoot({
    rootSel: "#targetFilter",
    listSel: "#targetMenuList",
    menuSel: "#targetMenu",
    toggleSel: "#targetToggle",
    clearSel: "#targetClear"
  });
  wireTargetFilterRoot({
    rootSel: "#timelineTargetFilter",
    listSel: "#timelineTargetMenuList",
    menuSel: "#timelineTargetMenu",
    toggleSel: "#timelineTargetToggle",
    clearSel: "#timelineTargetClear"
  });
  // 표 안 기전 칩 클릭 → 동일 필터 토글 (한 번만)
  document.querySelector("#masterRows")?.addEventListener("click", event => {
    const chip = event.target.closest("button.mech-target[data-target]");
    if (!chip) return;
    event.preventDefault();
    toggleTarget(chip.dataset.target);
  });
  updateTargetToggleLabel();
}

const now = new Date();
const CURRENT_YEAR = now.getFullYear();
const CURRENT_QUARTER = Math.ceil((now.getMonth() + 1) / 3);
let liveSnapshot = null;
let liveBackend = true; // 정적 배포(GitHub Pages 등)에서는 false로 내려가 '실시간 갱신' UI를 중립 안내로 바꾼다.
let registryTimelineEvents = [];

const activeRegistryStatuses = new Set([
  "RECRUITING", "NOT_YET_RECRUITING", "ACTIVE_NOT_RECRUITING", "ENROLLING_BY_INVITATION"
]);

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatRegistryStatus(status) {
  return ({
    RECRUITING: "모집 중",
    NOT_YET_RECRUITING: "모집 전",
    ACTIVE_NOT_RECRUITING: "진행 중·모집 종료",
    ENROLLING_BY_INVITATION: "초청 모집",
    COMPLETED: "완료",
    TERMINATED: "조기 종료",
    WITHDRAWN: "철회",
    SUSPENDED: "일시 중단"
  })[status] || status || "상태 미상";
}

function formatDate(value) {
  if (!value) return "일정 미등록";
  const match = String(value).match(/^(\d{4})-(\d{2})(?:-(\d{2}))?/);
  if (!match) return value;
  return `${match[1]}.${match[2]}${match[3] ? `.${match[3]}` : ""}`;
}

function relativeTime(iso) {
  if (!iso) return "확인 이력 없음";
  const minutes = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 60000));
  if (minutes < 1) return "방금";
  if (minutes < 60) return `${minutes}분 전`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}시간 전`;
  return `${Math.round(hours / 24)}일 전`;
}

function formatUpdateTimestamp(iso) {
  if (!iso) return "확인 전";
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date(iso)).replace(/\.$/, "");
}

function rebuildRegistryTimeline(snapshot) {
  const cutoff = new Date().toISOString().slice(0, 10);
  const pastFloor = `${CURRENT_YEAR - 2}-01-01`;
  registryTimelineEvents = Object.values(snapshot?.programs || {}).flatMap(program =>
    (program.studies || []).flatMap(study => {
      const out = [];
      // 향후 완료 예정 (등록 기준)
      const futureDate = study.primaryCompletion || study.completion;
      if (futureDate && futureDate >= cutoff) {
        const match = String(futureDate).match(/^(\d{4})-(\d{2})/);
        if (match) {
          out.push({
            year: Number(match[1]),
            quarter: Math.ceil(Number(match[2]) / 3),
            asset: program.label,
            sub: `${study.nctId} · 등록 감시`,
            type: "future",
            title: `${study.title || study.nctId} 주요 완료 예정`,
            text: `${formatRegistryStatus(study.status)} · primary ${formatDate(study.primaryCompletion)} · completion ${formatDate(study.completion)}`
          });
        }
      }
      // 최근 등록 갱신 (과거 2년)
      if (study.lastUpdate && study.lastUpdate >= pastFloor && study.lastUpdate <= cutoff) {
        const match = String(study.lastUpdate).match(/^(\d{4})-(\d{2})/);
        if (match) {
          out.push({
            year: Number(match[1]),
            quarter: Math.ceil(Number(match[2]) / 3),
            asset: program.label,
            sub: `${study.nctId} · 등록 갱신`,
            type: "clinical",
            title: `등록 정보 갱신 ${study.nctId}`,
            text: `${formatRegistryStatus(study.status)} · lastUpdate ${formatDate(study.lastUpdate)} · ${study.title || ""}`
          });
        }
      }
      return out;
    })
  );
}

function applyLiveRows(snapshot) {
  document.querySelectorAll("#masterRows tr[data-asset-id]").forEach(row => {
    const program = snapshot?.programs?.[row.dataset.assetId];
    const stageTarget = row.querySelector(".stage-cell");
    const watchTarget = row.querySelector(".watch-cell");
    if (!program || !stageTarget || !watchTarget) return;
    const active = (program.studies || []).filter(study => activeRegistryStatuses.has(study.status));
    const mostRecent = [...(program.studies || [])]
      .filter(study => study.lastUpdate)
      .sort((a, b) => b.lastUpdate.localeCompare(a.lastUpdate))[0];
    // CT.gov 등록 감시 신호 (핵심 임상 드롭다운·효능 결과 블록과 무관)
    stageTarget.insertAdjacentHTML("beforeend", `
      <div class="live-registry">
        <span class="live-registry-label">등록 감시</span>
        <span>활성·모집 예정 ${active.length}건 · 추적 ${program.studies.length}건</span>
        ${mostRecent ? `<a href="https://clinicaltrials.gov/study/${mostRecent.nctId}" target="_blank" rel="noopener">최근 갱신 ${formatDate(mostRecent.lastUpdate)} · ${mostRecent.nctId} · ${formatRegistryStatus(mostRecent.status)}</a>` : `<span class="muted-cell">최근 등록 갱신 기록 없음</span>`}
      </div>`);
    const milestone = program.nextMilestone;
    if (milestone) {
      watchTarget.insertAdjacentHTML("beforeend", `
        <div class="live-registry">
          <span class="live-registry-label">등록 감시</span>
          <a href="https://clinicaltrials.gov/study/${milestone.nctId}" target="_blank" rel="noopener">다음 일정 ${milestone.nctId} · ${formatDate(milestone.date)} ${milestone.kind === "primary completion" ? "주요 완료 예정" : "시험 완료 예정"}</a>
        </div>`);
    }
  });
}

function renderChanges(snapshot, showComplete = false) {
  const panel = document.querySelector("#changePanel");
  const list = document.querySelector("#changeList");
  const changes = snapshot?.currentChanges || [];
  const summary = snapshot?.refreshSummary;
  const summaryText = summary
    ? `신뢰성 검증 ${summary.verification === "pass" ? "통과" : "부분 완료"} · 임상등록 ${summary.verifiedRegistry ?? summary.knownStudies}/${summary.expectedRegistry ?? summary.knownStudies}건 · 공식 원문 ${summary.verifiedSources ?? summary.monitoredSources}/${summary.expectedSources ?? summary.monitoredSources}건 · PubMed ${summary.literature}건`
    : "";
  panel.hidden = changes.length === 0 && !showComplete;
  if (!changes.length) {
    list.innerHTML = showComplete
      ? `<div class="change-complete"><b>최신 정보 확인·반영 완료</b><span>이번 실행의 신규 변경은 없습니다. ${summaryText} · 로컬 DB 저장 및 일별 백업 완료${summary?.verification === "partial" ? " · 일부 출처 확인 실패는 캐시를 유지했으며 자동 반영에서 제외" : ""}</span></div>`
      : "";
    return;
  }
  list.innerHTML = changes.map(change => {
    let detail = "";
    let resultLabel = "";
    if (change.scope === "registry" && change.before && change.after) {
      const keys = Object.keys(change.after).filter(key =>
        JSON.stringify(change.before[key]) !== JSON.stringify(change.after[key])
      );
      detail = keys.map(key => `${key}: ${escapeHtml(JSON.stringify(change.before[key]))} → ${escapeHtml(JSON.stringify(change.after[key]))}`).join("<br>");
      resultLabel = `<em class="change-result applied">자동 반영 완료</em>`;
    } else if (change.scope === "discovery") {
      detail = `${escapeHtml(change.reviewReason || "신규 임상 후보")}<br>상태: ${escapeHtml(formatRegistryStatus(change.after?.status))} · Sponsor: ${escapeHtml(change.after?.leadSponsor || "미등록")} · 갱신일: ${escapeHtml(formatDate(change.after?.lastUpdate))}`;
      resultLabel = `<em class="change-result pending">신규 경쟁 후보 · 표 반영 전</em>`;
    } else if (change.scope === "literature") {
      detail = `게재일: ${escapeHtml(change.after?.pubDate || "미등록")} · 저널: ${escapeHtml(change.after?.source || "미등록")}`;
      resultLabel = `<em class="change-result pending">신규 논문 · 표 반영 전</em>`;
    } else {
      const fields = change.changedFields?.length ? change.changedFields.join(", ") : "원문 내용";
      detail = `변경 요소: <b>${escapeHtml(fields)}</b>`;
      if (change.before?.bytes !== change.after?.bytes) {
        detail += `<br>파일 크기: ${escapeHtml(change.before?.bytes ?? "미기록")} → ${escapeHtml(change.after?.bytes ?? "미기록")} bytes`;
      }
      if (change.before?.lastModified !== change.after?.lastModified) {
        detail += `<br>최종 수정일: ${escapeHtml(change.before?.lastModified ?? "미기록")} → ${escapeHtml(change.after?.lastModified ?? "미기록")}`;
      }
      resultLabel = `<em class="change-result pending">원문 변경 감지 · 표 반영 전</em>`;
    }
    return `<article class="change-item"><div><b>${escapeHtml(change.program || change.label || change.id)}</b><span>${escapeHtml(change.id)} · ${relativeTime(change.detectedAt)}</span>${resultLabel}</div><p>${detail}</p><a href="${escapeHtml(change.url)}" target="_blank" rel="noopener">변경 원문 열기 ↗</a></article>`;
  }).join("");
}

async function apiJson(url, options = {}) {
  const response = await fetch(url, {
    cache: "no-store",
    headers: { "content-type": "application/json", ...(options.headers || {}) },
    ...options
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

function applyPromotedMap(map) {
  promotedTrialsByAsset = map && typeof map === "object" ? map : {};
}

function readDraftField(draftId, field) {
  const el = document.querySelector(`[data-draft-field="${draftId}:${field}"]`);
  if (!el) return undefined;
  const value = el.value.trim();
  return value ? value.replaceAll("\n", "<br>") : null;
}

function renderTrialDraftPanel() {
  const panel = document.querySelector("#trialDraftPanel");
  const list = document.querySelector("#trialDraftList");
  const countEl = document.querySelector("#trialDraftCount");
  if (!panel || !list) return;
  const drafts = (trialDraftStore.drafts || []).filter(d => d.status === "draft");
  countEl.textContent = drafts.length ? `${drafts.length}건` : "";
  panel.hidden = drafts.length === 0;
  if (!drafts.length) {
    list.innerHTML = "";
    return;
  }
  const assetName = id => (assets.find(a => a.id === id)?.name || id);
  list.innerHTML = drafts.map(d => `
    <article class="draft-card" data-draft-id="${escapeHtml(d.id)}">
      <div class="draft-card-head">
        <b>${escapeHtml(assetName(d.assetId))}</b>
        <span>${escapeHtml(d.nct)} · ${escapeHtml(d.registryStatus || "")}</span>
      </div>
      <p class="draft-title">${escapeHtml(d.title || "")}</p>
      <label class="draft-field"><span>라벨</span><input data-draft-field="${escapeHtml(d.id)}:label" value="${escapeHtml(d.label || "")}"></label>
      <label class="draft-field"><span>meta</span><input data-draft-field="${escapeHtml(d.id)}:meta" value="${escapeHtml(d.meta || "")}"></label>
      <label class="draft-field"><span>체중효능 HTML</span><textarea data-draft-field="${escapeHtml(d.id)}:weight" rows="2" placeholder="없으면 비움">${escapeHtml((d.weight || "").replaceAll("<br>", "\n"))}</textarea></label>
      <label class="draft-field"><span>간 약효 HTML</span><textarea data-draft-field="${escapeHtml(d.id)}:liver" rows="2" placeholder="없으면 비움">${escapeHtml((d.liver || "").replaceAll("<br>", "\n"))}</textarea></label>
      <label class="draft-field"><span>GI 발생 HTML</span><textarea data-draft-field="${escapeHtml(d.id)}:gi" rows="2" placeholder="중단 수치 금지">${escapeHtml((d.gi || "").replaceAll("<br>", "\n"))}</textarea></label>
      <label class="draft-field"><span>중단 HTML</span><textarea data-draft-field="${escapeHtml(d.id)}:discontinuation" rows="2">${escapeHtml((d.discontinuation || "").replaceAll("<br>", "\n"))}</textarea></label>
      <div class="draft-actions">
        <button type="button" data-draft-action="promote" data-draft-id="${escapeHtml(d.id)}">승격 (드롭다운 반영)</button>
        <button type="button" class="secondary" data-draft-action="reject" data-draft-id="${escapeHtml(d.id)}">반려</button>
        <a href="https://clinicaltrials.gov/study/${escapeHtml(d.nct)}" target="_blank" rel="noopener">CT.gov ↗</a>
      </div>
    </article>
  `).join("");
}

async function refreshTrialDraftsFromServerOrLocal(snapshot) {
  const curated = getCuratedNctsByAsset();
  if (liveBackend) {
    try {
      const result = await apiJson("/api/trial-drafts/scan", {
        method: "POST",
        body: JSON.stringify({ snapshot, curatedNctsByAsset: curated })
      });
      trialDraftStore = { schemaVersion: 1, updatedAt: result.updatedAt, drafts: result.drafts || [] };
      applyPromotedMap(result.promotedByAsset || {});
      renderTrialDraftPanel();
      return result;
    } catch (error) {
      console.warn("[trial-drafts] server scan failed", error);
    }
  }
  // 정적 배포·서버 실패: localStorage 초안만 유지 (신규 스캔은 브라우저에서 최소 병합)
  try {
    const raw = localStorage.getItem(TRIAL_DRAFT_STORAGE_KEY);
    if (raw) {
      trialDraftStore = JSON.parse(raw);
      const promoted = {};
      for (const d of trialDraftStore.drafts || []) {
        if (d.status !== "promoted") continue;
        if (!promoted[d.assetId]) promoted[d.assetId] = [];
        promoted[d.assetId].push({
          id: d.promotedTrialId || String(d.nct).toLowerCase(),
          label: d.label,
          meta: d.meta,
          nct: d.nct,
          hasLiver: Boolean(d.liver),
          weight: d.weight,
          liver: d.liver,
          gi: d.gi,
          discontinuation: d.discontinuation,
          refs: d.refs || {},
          source: "promoted-draft"
        });
      }
      applyPromotedMap(promoted);
    }
  } catch { /* ignore */ }
  renderTrialDraftPanel();
  return trialDraftStore;
}

async function patchDraft(id, patch) {
  if (liveBackend) {
    const result = await apiJson("/api/trial-drafts/update", {
      method: "POST",
      body: JSON.stringify({ id, ...patch })
    });
    trialDraftStore = result.store || trialDraftStore;
    applyPromotedMap(result.promotedByAsset || promotedTrialsByAsset);
    return result;
  }
  const draft = (trialDraftStore.drafts || []).find(d => d.id === id);
  if (!draft) throw new Error("draft not found");
  Object.assign(draft, patch, { updatedAt: new Date().toISOString() });
  localStorage.setItem(TRIAL_DRAFT_STORAGE_KEY, JSON.stringify(trialDraftStore));
  return { draft };
}

async function promoteDraft(id) {
  const patch = {
    label: readDraftField(id, "label"),
    meta: readDraftField(id, "meta"),
    weight: readDraftField(id, "weight"),
    liver: readDraftField(id, "liver"),
    gi: readDraftField(id, "gi"),
    discontinuation: readDraftField(id, "discontinuation")
  };
  patch.hasLiver = Boolean(patch.liver);
  if (liveBackend) {
    const result = await apiJson("/api/trial-drafts/promote", {
      method: "POST",
      body: JSON.stringify({ id, ...patch })
    });
    const store = await apiJson("/api/trial-drafts");
    trialDraftStore = store;
    applyPromotedMap(store.promotedByAsset || result.promotedByAsset || {});
    renderTrialDraftPanel();
    renderMaster();
    return result;
  }
  await patchDraft(id, patch);
  const draft = trialDraftStore.drafts.find(d => d.id === id);
  draft.status = "promoted";
  draft.promotedTrialId = String(draft.nct).toLowerCase();
  localStorage.setItem(TRIAL_DRAFT_STORAGE_KEY, JSON.stringify(trialDraftStore));
  await refreshTrialDraftsFromServerOrLocal(liveSnapshot);
  renderMaster();
}

async function rejectDraft(id) {
  if (liveBackend) {
    await apiJson("/api/trial-drafts/reject", { method: "POST", body: JSON.stringify({ id }) });
    const store = await apiJson("/api/trial-drafts");
    trialDraftStore = store;
    applyPromotedMap(store.promotedByAsset || {});
    renderTrialDraftPanel();
    renderMaster();
    return;
  }
  const draft = (trialDraftStore.drafts || []).find(d => d.id === id);
  if (draft) draft.status = "rejected";
  localStorage.setItem(TRIAL_DRAFT_STORAGE_KEY, JSON.stringify(trialDraftStore));
  renderTrialDraftPanel();
}

function initTrialDraftHandlers() {
  const list = document.querySelector("#trialDraftList");
  const closeBtn = document.querySelector("#closeTrialDrafts");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      document.querySelector("#trialDraftPanel").hidden = true;
    });
  }
  if (!list || list.dataset.bound === "1") return;
  list.dataset.bound = "1";
  list.addEventListener("click", async event => {
    const button = event.target.closest("[data-draft-action]");
    if (!button) return;
    const id = button.dataset.draftId;
    const action = button.dataset.draftAction;
    button.disabled = true;
    try {
      if (action === "promote") await promoteDraft(id);
      if (action === "reject") await rejectDraft(id);
    } catch (error) {
      console.error(error);
      alert(`초안 처리 실패: ${error.message}`);
    } finally {
      button.disabled = false;
    }
  });
}

/**
 * 최신 스냅샷을 네 탭 + 공통 패널 전부에 반영.
 * 1 비교표 2 일정 3 프로파일 4 레퍼런스 + 변경/초안 패널
 */
async function refreshAllViews(snapshot) {
  liveSnapshot = snapshot;
  normalizeComparisonEntries();
  auditKeyTrialBinding(snapshot);
  auditAssetDataIntegrity();
  rebuildRegistryTimeline(snapshot);

  const programCount = Object.keys(snapshot?.programs || {}).length;
  const studyCount = Object.values(snapshot?.programs || {}).reduce((sum, program) => sum + (program.studies?.length || 0), 0);
  const errors = snapshot?.errors?.length || 0;
  const litCount = (snapshot?.literature || []).length;
  const srcCount = Object.keys(snapshot?.sources || {}).length;
  const exactCheckedAt = formatUpdateTimestamp(snapshot?.registryCheckedAt);
  document.querySelector("#infoUpdatedAt").textContent = exactCheckedAt;
  document.querySelector("#syncStatus").textContent = `임상등록 ${studyCount}건 최신 확인`;
  document.querySelector("#syncMeta").textContent =
    `${programCount}개 프로그램 · PubMed ${litCount} · 원문 ${srcCount} · ${exactCheckedAt} 업데이트 (${relativeTime(snapshot?.registryCheckedAt)})${errors ? ` · 오류 ${errors}건은 캐시 유지` : ""}`;
  document.querySelector("#syncBar").classList.toggle("has-error", Boolean(errors));

  // 후보 초안 스캔(자동 승격 없음) → 승격분만 드롭다운 병합
  await refreshTrialDraftsFromServerOrLocal(snapshot);

  // 네 탭 전부 동일 스냅샷으로 재렌더
  renderMaster();      // 비교표 + 등록 감시 줄 + 핵심 임상 드롭다운
  renderTimeline();    // 정적 이벤트 + 등록 기반 향후/최근 갱신
  renderDossiers();    // 프로파일 + 등록 감시 블록
  renderSources();     // 정적 refs + 등록 NCT + PubMed + 감시 원문
  renderChanges(snapshot);
  renderTrialDraftPanel();
}

async function applyLiveSnapshot(snapshot) {
  await refreshAllViews(snapshot);
}

// v4: URL/첫 방문 시 간 약효(liver) 기본 표시. 키 변경으로 옛 localStorage(간 숨김)를 리셋한다.
const COLUMN_STORAGE_KEY = "competitor-master-hidden-columns-v4";
// 페이지를 처음 열 때(localStorage 없음) 기본으로 숨길 열. 나머지(간 약효 포함)는 표시.
// 사용자가 '표시 항목'에서 바꾸면 그 선택이 localStorage에 저장돼 이 기본값을 대체한다.
// 새 열 규칙: index.html <th data-column-key="..."> 를 추가하면 masterColumns()/표시 항목에 자동 포함된다.
// liver: 기본 표시. 이후 사용자가 끄면 v4 키에 저장되어 유지.
const DEFAULT_HIDDEN_COLUMNS = ["mechanism", "rights", "next"];
let hiddenMasterColumns = new Set();
try {
  // 구버전(간 기본 숨김) 키 제거 → 공개 URL 재방문 시 v4 기본(간 표시) 적용
  ["competitor-master-hidden-columns", "competitor-master-hidden-columns-v2", "competitor-master-hidden-columns-v3"]
    .forEach(key => localStorage.removeItem(key));
  const stored = localStorage.getItem(COLUMN_STORAGE_KEY);
  hiddenMasterColumns = new Set(stored ? JSON.parse(stored) : DEFAULT_HIDDEN_COLUMNS);
} catch {
  hiddenMasterColumns = new Set(DEFAULT_HIDDEN_COLUMNS);
}

/** 비교표 thead의 모든 th = 표시 항목 후보. 새 열 추가 시 여기 자동 반영. */
function masterColumns() {
  return [...document.querySelectorAll(".master-table thead th")].map((header, index) => ({
    key: header.dataset.columnKey || `column-${index + 1}`,
    label: header.textContent.trim(),
    index
  }));
}

/** localStorage에 남은 삭제된 열 키를 버리고, 현재 thead 키만 유지 */
function pruneHiddenColumnsToCurrent(columns) {
  const valid = new Set(columns.map(column => column.key));
  let changed = false;
  for (const key of [...hiddenMasterColumns]) {
    if (!valid.has(key)) {
      hiddenMasterColumns.delete(key);
      changed = true;
    }
  }
  if (changed) {
    localStorage.setItem(COLUMN_STORAGE_KEY, JSON.stringify([...hiddenMasterColumns]));
  }
}

function applyColumnVisibility() {
  const columns = masterColumns();
  columns.forEach(column => {
    document.querySelectorAll(`.master-table tr > :nth-child(${column.index + 1})`).forEach(cell => {
      cell.classList.toggle("column-hidden", hiddenMasterColumns.has(column.key));
    });
  });
  const visible = columns.filter(column => !hiddenMasterColumns.has(column.key)).length;
  document.querySelector("#columnToggle").textContent = `표시 항목 ${visible}/${columns.length}`;
  document.querySelector(".master-table").style.minWidth = `${Math.max(900, visible * 210)}px`;
  const ratioNote = document.querySelector(".table-note");
  if (ratioNote) ratioNote.hidden = hiddenMasterColumns.has("mechanism");
}

function initColumnSelector() {
  const columns = masterColumns();
  pruneHiddenColumnsToCurrent(columns);
  const menu = document.querySelector("#columnMenu");
  const selector = document.querySelector(".column-selector");
  const toggle = document.querySelector("#columnToggle");
  let closeTimer;
  const openMenu = () => {
    clearTimeout(closeTimer);
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
  };
  const closeMenu = () => {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  };
  // thead th 전량 → 체크박스. 간 약효 등 신규 열도 data-column-key 있으면 자동 포함.
  menu.innerHTML = columns.map(column => `
    <label class="column-option">
      <input type="checkbox" value="${column.key}" ${hiddenMasterColumns.has(column.key) ? "" : "checked"}>
      <span>${column.label}</span>
    </label>`).join("");
  menu.addEventListener("change", event => {
    const checkbox = event.target.closest('input[type="checkbox"]');
    if (!checkbox) return;
    if (checkbox.checked) hiddenMasterColumns.delete(checkbox.value);
    else hiddenMasterColumns.add(checkbox.value);
    localStorage.setItem(COLUMN_STORAGE_KEY, JSON.stringify([...hiddenMasterColumns]));
    applyColumnVisibility();
  });
  toggle.addEventListener("click", event => {
    const opening = menu.hidden;
    if (opening) openMenu();
    else closeMenu();
  });
  selector.addEventListener("mouseenter", openMenu);
  selector.addEventListener("mouseleave", () => {
    closeTimer = setTimeout(closeMenu, 180);
  });
  document.addEventListener("click", event => {
    if (event.target.closest(".column-selector")) return;
    closeMenu();
  });
  applyColumnVisibility();
}

/** 비교표에 보이는 자산 목록 (필터·정렬 동일) — 렌더·엑셀 내보내기 공용 */
function getFilteredMasterAssets() {
  const tier = document.querySelector("#masterTier")?.value || "all";
  const query = (document.querySelector("#masterSearch")?.value || "").trim().toLowerCase();
  return assets
    .filter(a => {
      const tierMatch = tier === "all" || a.tier === tier;
      const mechMatch = assetMatchesTargetFilter(a);
      const targetText = assetTargets(a.id).join(" ");
      const textMatch = !query || `${a.name} ${a.aliases} ${a.company} ${a.mechanism || ""} ${targetText}`.toLowerCase().includes(query);
      return tierMatch && mechMatch && textMatch;
    })
    .sort(compareAssetsForMaster);
}

/**
 * 화면 비교표 DOM → 엑셀용 행렬.
 * 표시 항목으로 숨긴 열 제외, 보이는 셀 텍스트만 (화면과 동일).
 */
function cellDomToExportText(cell) {
  if (!cell) return "";
  const clone = cell.cloneNode(true);
  clone.querySelectorAll("select").forEach(sel => {
    const opt = sel.options[sel.selectedIndex];
    const label = opt ? opt.textContent.trim() : "";
    sel.replaceWith(document.createTextNode(label));
  });
  // 엑셀: 레퍼런스·인용 배지 제거 (화면 본문만, 더 깔끔)
  clone.querySelectorAll(
    ".cell-refs, .citation, a.citation, a.registry, .event-refs, [class*='citation']"
  ).forEach(el => el.remove());
  clone.querySelectorAll("br").forEach(br => br.replaceWith("\n"));
  clone.querySelectorAll("li").forEach(li => {
    li.insertAdjacentText("beforebegin", "\n• ");
  });
  clone.querySelectorAll(".result-bound").forEach(el => {
    el.insertAdjacentText("afterend", "\n");
  });
  let text = clone.innerText || clone.textContent || "";
  text = text.replace(/\u00a0/g, " ");
  text = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  // 남은 [MZ-GLORY2] [NCT…] 형태 인용 토큰 제거
  text = text.replace(/\s*\[(?:NCT\d{8}|[A-Z]{1,6}[-A-Z0-9]{1,24})\]\s*/g, " ");
  text = text.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n");
  text = text.replace(/[ \t]{2,}/g, " ").trim();
  return text;
}

/** 엑셀: 색 최소화 (헤더·물질열·줄무늬·테두리만) */
const EXCEL_THEME = {
  ink: "FF172033",
  muted: "FF687386",
  white: "FFFFFFFF",
  line: "FFD0D7E2",
  headerBg: "FFF2F4F7",
  headerFg: "FF172033",
  titleBg: "FF172033",
  titleFg: "FFFFFFFF",
  firstCol: "FFF8FAFC",
  firstColAlt: "FFF1F4F8",
  zebra: "FFFAFBFC",
  pageBg: "FFF4F6F8",
  font: "Malgun Gothic"
};

// 열 너비만. 열마다 다른 색 쓰지 않음.
const EXCEL_COL_LAYOUT = {
  asset: { width: 24 },
  mechanism: { width: 30 },
  stage: { width: 16 },
  indication: { width: 22 },
  trial: { width: 28 },
  weight: { width: 34 },
  liver: { width: 34 },
  gi: { width: 30 },
  discontinuation: { width: 30 },
  rights: { width: 26 },
  next: { width: 28 }
};

function buildVisibleMasterTableMatrix() {
  const table = document.querySelector(".master-table");
  if (!table) return { columns: [], rows: [], rowCount: 0 };

  const ths = [...table.querySelectorAll("thead th")];
  const columns = ths
    .map((th, index) => ({
      th,
      index,
      key: th.dataset.columnKey || `col${index}`,
      title: (th.textContent || "").replace(/\s+/g, " ").trim()
    }))
    .filter(c => !c.th.classList.contains("column-hidden"));

  const bodyRows = [...table.querySelectorAll("tbody tr")];
  const rows = bodyRows.map(tr => {
    const cells = [...tr.children];
    return columns.map(col => cellDomToExportText(cells[col.index]));
  });

  return { columns, rows, rowCount: rows.length };
}

function exportFilterParts() {
  const tierEl = document.querySelector("#masterTier");
  const tierLabel = tierEl?.selectedOptions?.[0]?.textContent?.trim() || tierEl?.value || "전체";
  const targets = [...selectedTargets].sort((a, b) => a.localeCompare(b, "en"));
  const targetLabel = targets.length ? targets.join(" + ") + " (AND)" : "표적 전체";
  const query = (document.querySelector("#masterSearch")?.value || "").trim() || "—";
  return { tierLabel, targetLabel, query };
}

function exportFilterCaption() {
  const { tierLabel, targetLabel, query } = exportFilterParts();
  return `자산군: ${tierLabel}  |  표적: ${targetLabel}  |  검색: ${query}`;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function exportMasterAsCsv(headers, dataRows, filename) {
  const esc = cell => {
    const s = String(cell ?? "");
    if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
    return s;
  };
  const lines = [headers.map(esc).join(",")].concat(dataRows.map(r => r.map(esc).join(",")));
  const bom = "\uFEFF";
  const blob = new Blob([bom + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
  downloadBlob(blob, filename.replace(/\.xlsx$/i, ".csv"));
}

function loadScriptOnce(src, globalName) {
  if (globalName && window[globalName]) return Promise.resolve(window[globalName]);
  const existing = document.querySelector(`script[data-export-lib="${src}"]`);
  if (existing) {
    return new Promise((resolve, reject) => {
      if (globalName && window[globalName]) return resolve(window[globalName]);
      existing.addEventListener("load", () => resolve(globalName ? window[globalName] : true));
      existing.addEventListener("error", () => reject(new Error(`load failed ${src}`)));
    });
  }
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.dataset.exportLib = src;
    s.onload = () => resolve(globalName ? window[globalName] : true);
    s.onerror = () => reject(new Error(`load failed ${src}`));
    document.head.appendChild(s);
  });
}

async function loadExcelJs() {
  // ExcelJS: 헤더 색·테두리·틀 고정·줄바꿈 지원 (화면 표 느낌)
  const ExcelJS = await loadScriptOnce(
    "https://cdn.jsdelivr.net/npm/exceljs@4.4.0/dist/exceljs.min.js",
    "ExcelJS"
  );
  if (!ExcelJS) throw new Error("ExcelJS missing");
  return ExcelJS;
}

function excelColWidth(key, title) {
  const layout = EXCEL_COL_LAYOUT[key];
  if (layout?.width) return layout.width;
  return Math.min(28, Math.max(14, String(title || "").length + 2));
}

function excelSolid(argb) {
  return { type: "pattern", pattern: "solid", fgColor: { argb } };
}

function excelBorder() {
  const edge = { style: "thin", color: { argb: EXCEL_THEME.line } };
  return { top: edge, left: edge, bottom: edge, right: edge };
}

function estimateExcelRowHeight(values) {
  let lines = 1;
  for (const v of values) {
    const parts = String(v || "").split("\n");
    let n = 0;
    for (const p of parts) n += Math.max(1, Math.ceil(p.length / 28));
    if (n > lines) lines = n;
  }
  return Math.min(140, Math.max(32, 16 + lines * 12));
}

// 2026-07-27 제거: 셀 내용에 '미공개·미확보' 같은 말이 들어 있으면 글자를 흐리게
// 칠하던 함수가 있었다. 두 가지가 잘못이었다.
//   1) 엑셀에는 범례가 없어서 흐린 글자가 무슨 뜻인지 알 수 없다.
//   2) 부분일치라, 실제 수치가 들어 있는 문장이라도 저 단어가 한 번 섞이면
//      셀 전체가 흐려졌다. 색이 내용과 무관하게 바뀌었다.
// 의미는 이미 셀 텍스트(`[회사 미공개]` / `[1차 미확보]`)가 그대로 담고 있으므로
// 색을 따로 쓰지 않는다. 본문 글자색은 한 가지다.

async function writeStyledMasterWorkbook(columns, rows) {
  const ExcelJS = await loadExcelJs();
  const wb = new ExcelJS.Workbook();
  wb.creator = "competitor-intelligence";
  wb.created = new Date();
  wb.title = "경쟁물질 비교표";

  // 1 제목 · 2 필터 한 줄 · 3 컬럼 헤더
  const HEADER_ROWS = 3;
  const ws = wb.addWorksheet("비교표", {
    views: [{ state: "frozen", xSplit: 1, ySplit: HEADER_ROWS, showGridLines: false }],
    properties: { defaultRowHeight: 18 }
  });

  const colCount = Math.max(1, columns.length);
  const border = excelBorder();
  const when = new Date().toLocaleString("ko-KR", { hour12: false });

  // —— 1행 제목 (단색) ——
  ws.mergeCells(1, 1, 1, colCount);
  const titleCell = ws.getCell(1, 1);
  titleCell.value = "경쟁물질 비교표";
  titleCell.font = {
    name: EXCEL_THEME.font,
    size: 16,
    bold: true,
    color: { argb: EXCEL_THEME.titleFg }
  };
  titleCell.alignment = { vertical: "middle", horizontal: "left", indent: 1 };
  titleCell.fill = excelSolid(EXCEL_THEME.titleBg);
  ws.getRow(1).height = 32;
  for (let c = 1; c <= colCount; c++) {
    ws.getCell(1, c).fill = excelSolid(EXCEL_THEME.titleBg);
  }

  // —— 2행 필터 요약 (연한 회색 한 줄) ——
  ws.mergeCells(2, 1, 2, colCount);
  const cap = ws.getCell(2, 1);
  cap.value = `${exportFilterCaption()}  ·  ${rows.length}개 물질  ·  ${when}`;
  cap.font = { name: EXCEL_THEME.font, size: 10, color: { argb: EXCEL_THEME.muted } };
  cap.alignment = { vertical: "middle", horizontal: "left", indent: 1, wrapText: true };
  cap.fill = excelSolid(EXCEL_THEME.pageBg);
  ws.getRow(2).height = 22;
  for (let c = 1; c <= colCount; c++) {
    ws.getCell(2, c).fill = excelSolid(EXCEL_THEME.pageBg);
  }

  // —— 3행 헤더 (통일 회색) ——
  const headerRow = ws.getRow(3);
  headerRow.height = 34;
  columns.forEach((col, i) => {
    const cell = headerRow.getCell(i + 1);
    cell.value = col.title;
    cell.font = {
      name: EXCEL_THEME.font,
      size: 10,
      bold: true,
      color: { argb: EXCEL_THEME.headerFg }
    };
    cell.alignment = { vertical: "middle", horizontal: "center", wrapText: true };
    cell.fill = excelSolid(EXCEL_THEME.headerBg);
    cell.border = border;
  });

  // —— 데이터: 흰 배경 + 연한 줄무늬, 첫 열만 약간 구분 ——
  rows.forEach((vals, r) => {
    const excelRow = ws.getRow(HEADER_ROWS + 1 + r);
    excelRow.height = estimateExcelRowHeight(vals);
    const zebra = r % 2 === 1;
    vals.forEach((val, i) => {
      const cell = excelRow.getCell(i + 1);
      const text = String(val ?? "");
      cell.value = text;
      // 본문 글자색은 항상 ink 하나. 내용에 따라 바꾸지 않는다.
      cell.font = {
        name: EXCEL_THEME.font,
        size: i === 0 ? 10 : 9.5,
        bold: i === 0,
        color: { argb: EXCEL_THEME.ink }
      };
      cell.alignment = { vertical: "top", horizontal: "left", wrapText: true };
      cell.border = border;
      if (i === 0) {
        cell.fill = excelSolid(zebra ? EXCEL_THEME.firstColAlt : EXCEL_THEME.firstCol);
      } else if (zebra) {
        cell.fill = excelSolid(EXCEL_THEME.zebra);
      } else {
        cell.fill = excelSolid(EXCEL_THEME.white);
      }
    });
  });

  columns.forEach((col, i) => {
    ws.getColumn(i + 1).width = excelColWidth(col.key, col.title);
  });

  ws.autoFilter = {
    from: { row: HEADER_ROWS, column: 1 },
    to: { row: HEADER_ROWS + rows.length, column: colCount }
  };

  ws.pageSetup = {
    orientation: "landscape",
    fitToPage: true,
    fitToWidth: 1,
    fitToHeight: 0,
    paperSize: 9,
    margins: { left: 0.35, right: 0.35, top: 0.45, bottom: 0.45, header: 0.2, footer: 0.2 }
  };

  const buffer = await wb.xlsx.writeBuffer();
  return new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  });
}

async function exportMasterExcel() {
  const btn = document.querySelector("#exportExcel");
  renderMaster();
  const { columns, rows, rowCount } = buildVisibleMasterTableMatrix();
  if (!rowCount || !columns.length) {
    window.alert("내보낼 표가 없습니다. 필터·표시 항목을 확인하세요.");
    return;
  }
  const stamp = new Date().toISOString().slice(0, 10);
  const base = `competitor-master-${stamp}`;
  const headers = columns.map(c => c.title);
  if (btn) {
    btn.disabled = true;
    btn.textContent = "내보내는 중…";
  }
  try {
    const blob = await writeStyledMasterWorkbook(columns, rows);
    downloadBlob(blob, `${base}.xlsx`);
  } catch (err) {
    console.warn("[exportExcel] styled xlsx failed, CSV fallback", err);
    exportMasterAsCsv(headers, rows, `${base}.csv`);
    window.alert("서식 있는 엑셀 생성에 실패해 CSV로 저장했습니다. Excel에서 열 수 있습니다.");
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = "엑셀 내보내기";
    }
  }
}

function initExcelExport() {
  const btn = document.querySelector("#exportExcel");
  if (!btn || btn.dataset.bound === "1") return;
  btn.dataset.bound = "1";
  btn.addEventListener("click", () => {
    exportMasterExcel().catch(err => {
      console.error(err);
      window.alert("내보내기에 실패했습니다.");
    });
  });
}

function renderMaster() {
  const rows = getFilteredMasterAssets();
  document.querySelector("#masterRows").innerHTML = rows.map(a => {
    const entry = getComparisonEntry(a.id);
    const trial = entry ? getActiveTrial(a.id, entry) : null;
    const results = resolveTrialResults(trial);
    // comparison 미등록을 '중단'으로 단정하지 않는다. 중단은 tier=historical(입력된 사실)일 때만.
    // 그 밖에는 §6 빈칸 어휘로 데이터 없음만 표기한다 (새 자산 추가 시 거짓 표기 방지).
    const indication = entry?.indication
      || (a.tier === "historical" ? "개발 중단·비활성 자산" : "[1차 미확보]");
    const rights = entry?.rights || a.origin;
    const nextHtml = entry?.next || a.watch.join("<br>");
    const nextNcts = entry?.nextNcts || [];
    const rowRefs = assetReferenceMap[a.name] || [];
    const cellRefs = key => {
      // 결과 열 인용은 선택 임상 블록 refs만
      const keys = isTrialResultKey(key)
        ? (trial?.refs?.[key] || [])
        : (key === "rights" ? (entry?.rightsRefs || rowRefs) : (trial?.refs?.[key] || rowRefs));
      return `<span class="cell-refs">${cite(keys)}</span>`;
    };
    const statusClass = a.tier === "historical" ? "historical" : a.tier === "watch" ? "watch" : "";
    const trialCell = entry
      ? renderTrialCell(a.id, entry, trial, rowRefs)
      // 핵심 임상 미등록 ≠ 개발 중단. 기존 '기준 임상 없음' 어휘를 그대로 쓴다.
      : `<div class="trial-block"><div class="trial-name trial-name-control">${escapeHtml(a.phase || "단계 미상")}</div><div class="trial-meta-line">${a.tier === "historical" ? "현재 활성 개발 없음" : "기준 임상 없음"}</div></div>`;
    // 결과 열: TRIAL_RESULT_KEYS 순회 → 새 결과 필드 추가 시 스탬프·값 자동 포함
    const resultCellsHtml = TRIAL_RESULT_KEYS.map(key => {
      const extra = key === "liver" ? " liver-cell" : "";
      return `<td class="result-cell${extra}" data-column-result="${key}" data-trial-binding="dependent">${renderResultCell(trial, key, results[key], cellRefs(key))}</td>`;
    }).join("");
    return `<tr data-asset-id="${a.id}" data-mechanism="${escapeHtml(a.mechanism || "")}" data-targets="${escapeHtml(assetTargets(a.id).join(","))}" data-active-trial="${trial?.id || ""}">
      <td data-trial-binding="asset"><b class="asset-name">${a.name}${a.id === "da1726" ? '<span class="internal-mark">INTERNAL</span>' : ""}</b><span class="muted-cell">${a.aliases}<br>${a.company}</span>${cellRefs("rights")}</td>
      <td data-trial-binding="asset" data-column-result="mechanism">${renderMechanismCell(a, rowRefs)}</td>
      <td class="stage-cell" data-trial-binding="asset"><span class="status ${statusClass}">${a.phase}</span></td>
      <td data-trial-binding="asset">${indication}</td>
      <td class="trial-cell" data-trial-binding="selection">${trialCell}</td>
      ${resultCellsHtml}
      <td data-trial-binding="asset">${rights}${cellRefs("rights")}</td>
      <td class="watch-cell" data-trial-binding="asset"><ul class="watch-list">${a.watch.map(w => `<li>${w}</li>`).join("")}</ul>${(nextNcts || []).map(registryCitation).join(" ")}<div class="muted-cell">${nextHtml}</div></td>
    </tr>`;
  }).join("");
  document.querySelector("#masterEmpty").hidden = rows.length > 0;
  if (liveSnapshot) applyLiveRows(liveSnapshot);
  applyColumnVisibility();
  auditMasterResultColumns();
}

function initTrialSelectHandlers() {
  const tbody = document.querySelector("#masterRows");
  if (!tbody || tbody.dataset.trialSelectBound === "1") return;
  tbody.dataset.trialSelectBound = "1";
  tbody.addEventListener("change", event => {
    const select = event.target.closest("select.trial-select");
    if (!select) return;
    const assetId = select.dataset.assetId;
    const trialId = select.value;
    if (!assetId || !trialId) return;
    saveSelectedTrial(assetId, trialId);
    renderMaster();
  });
}

let activeFilter = "all";
const openTimelineAssets = new Set();
const timelineExcludedAssets = new Set(["PB-718", "CMS-D005"]);
const timelineMarkerNames = {
  deal: "계약",
  clinical: "임상",
  data: "결과",
  regulatory: "허가",
  future: "예정",
  stop: "중단"
};

function syncTimelineAxis() {
  const scroll = document.querySelector("#timelineList");
  const axis = document.querySelector("#timelineAxis");
  if (axis && Math.abs(axis.scrollLeft - scroll.scrollLeft) > 1) {
    axis.scrollLeft = scroll.scrollLeft;
  }
}

function syncTimelineBodyFromAxis() {
  const scroll = document.querySelector("#timelineList");
  const axis = document.querySelector("#timelineAxis");
  if (scroll && axis && Math.abs(scroll.scrollLeft - axis.scrollLeft) > 1) {
    scroll.scrollLeft = axis.scrollLeft;
  }
}

function canonicalTimelineAssetName(name) {
  if (name === "DD01") return "Zabopegdutide";
  return name;
}

/** 일정 이벤트 자산명 → assets[] 행 (표적 필터용) */
function assetFromTimelineName(name) {
  const n = canonicalTimelineAssetName(name);
  return assets.find(a => a.name === n) || null;
}

function renderTimeline() {
  const query = document.querySelector("#searchInput").value.trim().toLowerCase();
  const range = document.querySelector("#rangeFilter").value;
  const startYear = range === "current" ? 2024 : range === "future" ? 2026 : 2011;
  const endYear = 2031;
  const liveNcts = new Set(registryTimelineEvents.flatMap(event => event.sub.match(/NCT\d{8}/g) || []));
  const baseEvents = events.filter(event =>
    !(event.type === "future" && (event.sub.match(/NCT\d{8}/g) || []).some(nct => liveNcts.has(nct)))
  );
  const timelineSource = [...baseEvents, ...registryTimelineEvents]
    .filter(event => !timelineExcludedAssets.has(event.asset));
  const filtered = timelineSource.filter(e => {
    const typeMatch = activeFilter === "all" || e.type === activeFilter;
    const textMatch = !query || `${e.asset} ${e.sub} ${e.title} ${e.text}`.toLowerCase().includes(query);
    // 기전 표적 필터 (비교표 selectedTargets와 동일 AND)
    const asset = assetFromTimelineName(e.asset);
    const mechMatch = !selectedTargets.size
      ? true
      : asset
        ? assetMatchesTargetFilter(asset)
        : false;
    return typeMatch && textMatch && mechMatch && e.year >= startYear && e.year <= endYear;
  });
  const years = Array.from({length: endYear - startYear + 1}, (_, i) => startYear + i);
  const cols = years.length * 4;
  const assetOrder = assets.map(a => a.name);
  const groupedAssets = [...new Set(filtered.map(e => canonicalTimelineAssetName(e.asset)))]
    .sort((a, b) => {
      const ai = assetOrder.indexOf(a), bi = assetOrder.indexOf(b);
      return (ai < 0 ? 999 : ai) - (bi < 0 ? 999 : bi);
    });
  const axis = `
    <div class="matrix-axis">
      <div class="axis-corner">물질 / 이벤트</div>
      <div class="axis-time">
        <div class="axis-years">${years.map(y => `<div class="axis-year">${y}</div>`).join("")}</div>
        <div class="axis-quarters">${years.flatMap(year => [1,2,3,4].map(q => ({year, q}))).map(item => {
          const isCurrent = item.year === CURRENT_YEAR && item.q === CURRENT_QUARTER;
          return `<div class="axis-quarter ${isCurrent ? "current" : ""}">Q${item.q}${isCurrent ? " 현재" : ""}</div>`;
        }).join("")}</div>
      </div>
    </div>`;
  const groups = groupedAssets.map(assetName => {
    const asset = assets.find(a => a.name === assetName);
    const assetEvents = filtered.filter(e => canonicalTimelineAssetName(e.asset) === assetName).sort((a,b) => a.year - b.year || (a.qStart || a.quarter || 0) - (b.qStart || b.quarter || 0));
    // 기본 닫힘. 사용자가 연 물질만 펼침. 검색어 있을 때만 결과 확인용으로 펼침.
    const isOpen = openTimelineAssets.has(assetName) || Boolean(query);
    const mechLabel = asset?.mechanism
      ? `<span class="timeline-mech">${escapeHtml(asset.mechanism)}</span>`
      : "";
    const targetBits = asset ? assetTargets(asset.id) : [];
    const targetLabel = targetBits.length
      ? `<span class="timeline-targets">${targetBits.map(t => escapeHtml(t)).join(" · ")}</span>`
      : "";
    const metaRow = (mechLabel || targetLabel)
      ? `<div class="asset-group-meta">${mechLabel}${targetLabel}</div>`
      : "";
    return `<section class="asset-group ${isOpen ? "" : "collapsed"}" data-timeline-asset="${encodeURIComponent(assetName)}">
      <div class="asset-group-head">
        <div class="asset-group-title">
          <div class="asset-group-identity">
            <div class="asset-group-name">
              <b>${assetName}</b>${asset?.company ? `<span class="asset-group-company">${escapeHtml(asset.company)}</span>` : ""}
            </div>
            ${metaRow}
            <div class="group-refs">${cite(assetReferenceMap[assetName] || [])}</div>
          </div>
          <button class="asset-toggle" type="button" aria-expanded="${isOpen}" aria-label="${assetName} 일정 ${isOpen ? "닫기" : "열기"}">
            <span>${assetEvents.length}개 이벤트</span><strong>${isOpen ? "닫기" : "열기"}</strong>
          </button>
        </div>
        <div class="asset-group-band" aria-hidden="true"></div>
      </div>
      ${assetEvents.map(e => {
        const yearOffset = (e.year - startYear) * 4;
        const eventQuarter = e.qStart || e.quarter;
        const start = yearOffset + (eventQuarter || 1);
        const span = e.qSpan || (eventQuarter ? 1 : 4);
        const quarterText = e.qSpan ? `Q${e.qStart}–Q${e.qStart + e.qSpan - 1}` : e.quarter ? `Q${e.quarter}` : "연도 기준";
        const markerText = eventQuarter ? timelineMarkerNames[e.type] || "이벤트" : "연도만 공개";
        const todayColumn = (CURRENT_YEAR - startYear) * 4 + CURRENT_QUARTER;
        const currentShade = todayColumn > 0 && todayColumn <= cols ? `<i class="current-quarter-shade" style="grid-column:${todayColumn}"></i>` : "";
        const eventDetail = `${typeNames[e.type]} · ${e.sub} · ${e.text}`;
        const eventTooltip = `${e.title} · ${eventDetail}`;
        const eventTooltipAttr = escapeHtml(eventTooltip);
        return `<div class="matrix-event">
          <div class="matrix-event-label" tabindex="0" aria-label="${eventTooltipAttr}" data-full-title="${escapeHtml(e.title)}" data-full-detail="${escapeHtml(eventDetail)}">
            <b class="event-title">${e.title}</b>
            <span class="event-meta"><i class="event-type ${e.type}">${typeNames[e.type]}</i>${e.sub}</span>
            <span class="event-refs">${nctCitations(`${e.sub} ${e.text}`)} ${cite(assetReferenceMap[e.asset] || [])}</span>
          </div>
          <div class="quarter-grid">
            ${currentShade}
            <span class="quarter-marker ${e.type} ${eventQuarter ? "" : "unknown"}" style="grid-column:${start} / span ${span}" title="${e.year} ${quarterText} · ${e.text.replaceAll('"', '&quot;')}">${markerText}</span>
          </div>
        </div>`;
      }).join("")}
    </section>`;
  }).join("");
  document.querySelector("#timelineAxis").innerHTML = filtered.length
    ? `<div class="matrix" style="--cols:${cols}">${axis}</div>`
    : "";
  document.querySelector("#timelineList").innerHTML = filtered.length
    ? `<div class="matrix" style="--cols:${cols}">${groups}</div>`
    : "";
  document.querySelector("#noResults").hidden = filtered.length > 0;
  if (filtered.length && startYear < CURRENT_YEAR) {
    requestAnimationFrame(() => {
      const scroll = document.querySelector("#timelineList");
      const quarterWidth = 66;
      const labelWidth = 360;
      const todayOffset = (CURRENT_YEAR - startYear) * 4 + CURRENT_QUARTER - 0.76;
      scroll.scrollLeft = Math.max(0, labelWidth + todayOffset * quarterWidth - scroll.clientWidth * 0.38);
      syncTimelineAxis();
    });
  }
  requestAnimationFrame(syncTimelineAxis);
}

let activeDossierTier = "core";

function renderDossierLiveBlock(assetId) {
  const program = liveSnapshot?.programs?.[assetId];
  const entry = getComparisonEntry(assetId);
  const trials = getComparisonTrials(entry, assetId);
  const drafts = (trialDraftStore.drafts || []).filter(d => d.assetId === assetId && d.status === "draft");
  const parts = [];
  if (trials.length) {
    parts.push(`<h4>핵심 임상</h4><ul>${trials.map(t =>
      `<li><b>${escapeHtml(t.label)}</b> · ${escapeHtml(t.meta || t.nct || "")}${t.nct ? ` ${registryCitation(t.nct)}` : ""}</li>`
    ).join("")}</ul>`);
  }
  if (program?.studies?.length) {
    const rows = [...program.studies]
      .sort((a, b) => String(b.lastUpdate || "").localeCompare(String(a.lastUpdate || "")))
      .map(s => `<li><a href="https://clinicaltrials.gov/study/${escapeHtml(s.nctId)}" target="_blank" rel="noopener">${escapeHtml(s.nctId)}</a> · ${escapeHtml(formatRegistryStatus(s.status))} · 갱신 ${escapeHtml(formatDate(s.lastUpdate))}</li>`)
      .join("");
    parts.push(`<h4>등록 감시 (최신 반영)</h4><ul>${rows}</ul>`);
    if (program.nextMilestone) {
      const m = program.nextMilestone;
      parts.push(`<p class="dossier-live-note">다음 등록 일정: <a href="https://clinicaltrials.gov/study/${escapeHtml(m.nctId)}" target="_blank" rel="noopener">${escapeHtml(m.nctId)}</a> · ${escapeHtml(formatDate(m.date))} ${m.kind === "primary completion" ? "주요 완료 예정" : "시험 완료 예정"}</p>`);
    }
  }
  if (drafts.length) {
    parts.push(`<h4>핵심 임상 후보 초안</h4><ul>${drafts.map(d =>
      `<li>${escapeHtml(d.nct)} · ${escapeHtml(d.meta || d.label || "")} (승격 전)</li>`
    ).join("")}</ul>`);
  }
  if (!parts.length) return "";
  return `<div class="dossier-live">${parts.join("")}</div>`;
}

function renderDossiers(tier = activeDossierTier) {
  activeDossierTier = tier || activeDossierTier;
  document.querySelector("#dossierGrid").innerHTML = assets.filter(a => a.tier === activeDossierTier).map(a => `
    <article class="dossier" tabindex="0" data-id="${a.id}" data-mechanism="${escapeHtml(a.mechanism || "")}" aria-expanded="false">
      <div class="dossier-summary">
        <div><h3>${a.name}</h3><span class="aliases">${a.aliases}</span></div>
        <span class="company">${a.company}</span>
        ${a.mechanism ? `<span class="mech-group">${escapeHtml(a.mechanism)}</span>` : ""}
        <p class="signal">${a.signal} ${cite(assetReferenceMap[a.name] || [])}</p>
        <span class="expand" aria-hidden="true">+</span>
      </div>
      <div class="dossier-detail">
        <div><h4>기전</h4><p>${escapeHtml(a.mechanism || "미지정")} · targets: ${escapeHtml((mechanismProfiles[a.id]?.targets || []).join(", ") || "—")}</p><h4>기원 / 권리</h4><p>${a.origin} ${cite(assetReferenceMap[a.name] || [])}</p><h4>현재 판단</h4><p>${a.strategy} ${cite(assetReferenceMap[a.name] || [])}</p>${renderDossierLiveBlock(a.id)}</div>
        <div><h4>다음 확인사항</h4><ul>${a.watch.map(w => `<li>${w} ${cite(assetReferenceMap[a.name] || [])}</li>`).join("")}</ul><p><a href="${a.source}" target="_blank" rel="noopener">대표 근거 열기 ↗</a></p></div>
      </div>
    </article>`).join("");
}

function toggleDossier(card) {
  const opening = !card.classList.contains("open");
  document.querySelectorAll(".dossier.open").forEach(c => { c.classList.remove("open"); c.setAttribute("aria-expanded", "false"); });
  if (opening) { card.classList.add("open"); card.setAttribute("aria-expanded", "true"); }
}

function renderSources() {
  const nctText = `${[...events, ...registryTimelineEvents].map(event => `${event.sub} ${event.text}`).join(" ")} ${JSON.stringify(comparison)} ${JSON.stringify(promotedTrialsByAsset)}`;
  const baseUrls = Object.values(references).map(ref => ref[2]);
  const staticNcts = new Set(nctText.match(/NCT\d{8}/g) || []);
  // 스냅샷 등록 감시 NCT 전부
  Object.values(liveSnapshot?.programs || {}).forEach(program => {
    (program.studies || []).forEach(study => {
      if (study.nctId) staticNcts.add(study.nctId);
    });
  });
  // 초안·승격 NCT
  (trialDraftStore.drafts || []).forEach(d => {
    if (d.nct) staticNcts.add(d.nct);
  });
  const citedNcts = [...staticNcts].filter(nct => !baseUrls.some(url => url.includes(nct))).sort();

  const baseCards = Object.entries(references).map(([key, ref]) => `
    <article class="source-card" id="ref-${key}">
      <span class="source-num">[${key}]</span><b>${ref[0]}</b><p>${ref[1]}</p>
      <a href="${ref[2]}" target="_blank" rel="noopener">원문 열기 ↗</a>
    </article>`).join("");

  const registryCards = citedNcts.map(nct => {
    let detail = "ClinicalTrials.gov 등록시험";
    let status = "";
    for (const program of Object.values(liveSnapshot?.programs || {})) {
      const study = (program.studies || []).find(s => s.nctId === nct);
      if (study) {
        detail = study.title || detail;
        status = `${formatRegistryStatus(study.status)} · 갱신 ${formatDate(study.lastUpdate)}`;
        break;
      }
    }
    return `<article class="source-card" id="ref-${nct}">
      <span class="source-num">[${nct}]</span><b>${nct}</b>
      <p>${escapeHtml(detail)}${status ? `<br><small>${escapeHtml(status)}</small>` : ""}</p>
      <a href="https://clinicaltrials.gov/study/${nct}" target="_blank" rel="noopener">원문 열기 ↗</a>
    </article>`;
  }).join("");

  // 감시 원문 (회사 페이지 등)
  const monitoredCards = Object.values(liveSnapshot?.sources || {}).map(src => `
    <article class="source-card" id="ref-src-${escapeHtml(src.id || src.url)}">
      <span class="source-num">[SRC]</span><b>${escapeHtml(src.label || src.id || "원문")}</b>
      <p>${escapeHtml(src.publisher || "")}${src.checkedAt ? ` · 확인 ${escapeHtml(formatUpdateTimestamp(src.checkedAt))}` : ""}${src.ok === false ? " · 확인 실패" : ""}</p>
      <a href="${escapeHtml(src.url)}" target="_blank" rel="noopener">원문 열기 ↗</a>
    </article>`).join("");

  // PubMed 최신 반영
  const literatureCards = (liveSnapshot?.literature || []).slice(0, 80).map(item => `
    <article class="source-card" id="ref-pmid-${escapeHtml(item.pmid || "")}">
      <span class="source-num">[PMID ${escapeHtml(item.pmid || "")}]</span>
      <b>${escapeHtml(item.title || "PubMed")}</b>
      <p>${escapeHtml(item.source || "")}${item.pubDate ? ` · ${escapeHtml(item.pubDate)}` : ""}</p>
      <a href="${escapeHtml(item.url || `https://pubmed.ncbi.nlm.nih.gov/${item.pmid}/`)}" target="_blank" rel="noopener">원문 열기 ↗</a>
    </article>`).join("");

  // 탐색 후보 중 relevant
  const discoveryCards = (liveSnapshot?.discoveredStudies || [])
    .filter(s => s.relevant)
    .slice(0, 40)
    .map(s => `
    <article class="source-card" id="ref-disc-${escapeHtml(s.nctId)}">
      <span class="source-num">[탐색]</span><b>${escapeHtml(s.nctId)}</b>
      <p>${escapeHtml(s.title || "")}<br><small>${escapeHtml(s.reviewReason || "후보")} · ${escapeHtml(formatRegistryStatus(s.status))}</small></p>
      <a href="https://clinicaltrials.gov/study/${escapeHtml(s.nctId)}" target="_blank" rel="noopener">원문 열기 ↗</a>
    </article>`).join("");

  document.querySelector("#sourceGrid").innerHTML =
    baseCards + monitoredCards + registryCards + literatureCards + discoveryCards;
}

function activateReportTab(tabId, updateHash = true) {
  const validId = ["master", "timeline", "records", "sources"].includes(tabId) ? tabId : "master";
  document.querySelectorAll(".report-tab-panel").forEach(panel => {
    panel.hidden = panel.id !== validId;
  });
  document.querySelectorAll(".section-nav a[role='tab']").forEach(tab => {
    const active = tab.getAttribute("href") === `#${validId}`;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  if (updateHash) history.pushState(null, "", `#${validId}`);
  if (validId === "timeline") requestAnimationFrame(() => {
    renderTimeline();
    syncTimelineAxis();
  });
}

function initReportTabs() {
  document.querySelector(".section-nav").addEventListener("click", event => {
    const tab = event.target.closest("a[role='tab']");
    if (!tab) return;
    event.preventDefault();
    activateReportTab(tab.getAttribute("href").slice(1));
    window.scrollTo({ top: 0, behavior: "auto" });
  });
  window.addEventListener("hashchange", () => {
    activateReportTab(location.hash.slice(1), false);
    window.scrollTo({ top: 0, behavior: "auto" });
  });
  activateReportTab(location.hash.slice(1) || "master", false);
}

function setupMasterScrollSync() {
  const top = document.getElementById("masterScrollTop");
  const inner = document.getElementById("masterScrollTopInner");
  const wrap = document.getElementById("masterTableWrap");
  const table = wrap && wrap.querySelector(".master-table");
  if (!top || !inner || !wrap || !table) return;
  const sync = () => { inner.style.width = `${table.scrollWidth}px`; };
  let lock = false;
  top.addEventListener("scroll", () => { if (lock) return; lock = true; wrap.scrollLeft = top.scrollLeft; lock = false; }, { passive: true });
  wrap.addEventListener("scroll", () => { if (lock) return; lock = true; top.scrollLeft = wrap.scrollLeft; lock = false; }, { passive: true });
  window.addEventListener("resize", sync);
  if (window.ResizeObserver) new ResizeObserver(sync).observe(table); // 행 변경·열 토글·창 크기 변화 시 상단 스크롤바 폭 자동 동기화
  sync();
}

// 새 약물·새 기전을 넣었을 때 조용히 누락되는 항목을 부팅 시 바로 콘솔에 보고
auditAssetDataIntegrity();
initReportTabs();
initColumnSelector();
initTrialSelectHandlers();
initTrialDraftHandlers();
initTargetFilter();
initExcelExport();
renderMaster();
renderTimeline();
renderDossiers();
renderSources();
setupMasterScrollSync();

document.querySelector("#masterTier").addEventListener("change", renderMaster);
document.querySelector("#masterSearch").addEventListener("input", renderMaster);
document.querySelector("#searchInput").addEventListener("input", renderTimeline);
document.querySelector("#rangeFilter").addEventListener("change", renderTimeline);
document.querySelector("#timelineList").addEventListener("click", event => {
  const button = event.target.closest(".asset-toggle");
  if (!button) return;
  const group = button.closest(".asset-group");
  const assetName = decodeURIComponent(group.dataset.timelineAsset);
  const opening = group.classList.contains("collapsed");
  group.classList.toggle("collapsed", !opening);
  button.setAttribute("aria-expanded", String(opening));
  button.setAttribute("aria-label", `${assetName} 일정 ${opening ? "닫기" : "열기"}`);
  button.querySelector("strong").textContent = opening ? "닫기" : "열기";
  if (opening) openTimelineAssets.add(assetName);
  else openTimelineAssets.delete(assetName);
});
document.querySelector("#timelineList").addEventListener("scroll", syncTimelineAxis, { passive: true });
document.querySelector("#timelineAxis").addEventListener("scroll", syncTimelineBodyFromAxis, { passive: true });
document.querySelectorAll(".chip").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".chip").forEach(b => b.classList.remove("active"));
  button.classList.add("active");
  activeFilter = button.dataset.filter;
  renderTimeline();
}));
document.querySelector(".dossier-tabs").addEventListener("click", e => {
  const button = e.target.closest("button");
  if (!button) return;
  document.querySelectorAll(".dossier-tabs button").forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
  button.classList.add("active"); button.setAttribute("aria-selected", "true");
  renderDossiers(button.dataset.tier);
});
document.querySelector("#dossierGrid").addEventListener("click", e => {
  const card = e.target.closest(".dossier");
  if (card && !e.target.closest("a")) toggleDossier(card);
});
document.querySelector("#dossierGrid").addEventListener("keydown", e => {
  if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("dossier")) { e.preventDefault(); toggleDossier(e.target); }
});

const dialog = document.querySelector("#methodDialog");
document.querySelector("#openMethod").addEventListener("click", () => dialog.showModal());
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => {
  const rect = dialog.getBoundingClientRect();
  if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) dialog.close();
});

async function requestSnapshot(url) {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

function updateProgress(state) {
  const progress = Math.max(0, Math.min(100, Number(state.progress) || 0));
  const panel = document.querySelector("#refreshProgress");
  panel.hidden = false;
  document.querySelector("#progressStage").textContent = state.stage || "확인 중";
  document.querySelector("#progressPercent").textContent = `${progress}%`;
  document.querySelector("#progressFill").style.width = `${progress}%`;
  document.querySelector(".progress-track").setAttribute("aria-valuenow", String(progress));
  document.querySelector("#progressDetail").textContent = state.detail || "";
  document.querySelector("#progressCount").textContent =
    state.total ? `${state.completed || 0}/${state.total}` : "";
}

async function runFullRefreshWithProgress() {
  let existing = await requestSnapshot("/api/refresh/status");
  while (existing.running) {
    updateProgress(existing);
    await new Promise(resolve => setTimeout(resolve, 300));
    existing = await requestSnapshot("/api/refresh/status");
  }
  updateProgress(await requestSnapshot("/api/refresh/start?force=1"));
  while (true) {
    await new Promise(resolve => setTimeout(resolve, 300));
    const state = await requestSnapshot("/api/refresh/status");
    updateProgress(state);
    if (!state.running) {
      if (state.error) throw new Error(state.error);
      break;
    }
  }
  return requestSnapshot("/api/snapshot");
}

async function loadDeployedSnapshot() {
  // GitHub Pages 등 정적 호스팅: 상대경로 data/latest.json (repo root 배포)
  return requestSnapshot("data/latest.json");
}

function markStaticDeployMode(status, meta, snapshot) {
  liveBackend = false;
  status.textContent = "배포 시점 데이터 표시 중";
  const when = snapshot?.registryCheckedAt
    ? formatUpdateTimestamp(snapshot.registryCheckedAt)
    : null;
  meta.textContent = when
    ? `보이는 수치는 배포 스냅샷 기준입니다 (${when}). 자동 수집·업데이트는 로컬 PC에서만 동작합니다.`
    : "보이는 수치는 배포 시점 기준입니다. 최신 정보를 자동으로 모아 데이터를 업데이트하는 기능은 로컬 PC에서만 동작합니다.";
}

async function initAutoRefresh() {
  const status = document.querySelector("#syncStatus");
  const meta = document.querySelector("#syncMeta");
  document.querySelector(".header-meta b").textContent = `${CURRENT_YEAR} Q${CURRENT_QUARTER}`;
  if (location.protocol === "file:") {
    try {
      const deployed = await loadDeployedSnapshot();
      if (deployed.registryCheckedAt) await applyLiveSnapshot(deployed);
      markStaticDeployMode(status, meta, deployed);
    } catch {
      markStaticDeployMode(status, meta, null);
    }
    return;
  }
  try {
    const cached = await requestSnapshot("/api/snapshot");
    if (cached.registryCheckedAt) await applyLiveSnapshot(cached);
    status.textContent = "ClinicalTrials.gov 최신값 확인 중";
    meta.textContent = "기존 데이터는 그대로 보이며 확인이 끝나면 자동 반영됩니다.";
    const fresh = await requestSnapshot("/api/refresh");
    await applyLiveSnapshot(fresh);
  } catch (error) {
    // API 없는 정적 배포(GitHub Pages): 커밋된 data/latest.json 사용
    try {
      const deployed = await loadDeployedSnapshot();
      if (deployed.registryCheckedAt) await applyLiveSnapshot(deployed);
      markStaticDeployMode(status, meta, deployed);
    } catch {
      markStaticDeployMode(status, meta, null);
    }
  }
}

document.querySelector("#forceRefresh").addEventListener("click", async event => {
  const button = event.currentTarget;
  if (!liveBackend) {
    document.querySelector("#syncStatus").textContent = "배포 시점 데이터 표시 중";
    document.querySelector("#syncMeta").textContent = "정보 확인·반영(자동 수집·업데이트)은 로컬 PC에서만 동작합니다.";
    return;
  }
  button.disabled = true;
  button.textContent = "최신 정보 확인 중…";
  try {
    const refreshed = await runFullRefreshWithProgress();
    await applyLiveSnapshot(refreshed);
    renderChanges(refreshed, true);
    const newChanges = refreshed.currentChanges || [];
    if (!newChanges.length) {
      document.querySelector("#syncStatus").textContent = "최신 정보 확인·반영 완료";
      const summary = refreshed.refreshSummary;
      document.querySelector("#syncMeta").textContent = summary
        ? `${formatUpdateTimestamp(refreshed.registryCheckedAt)} · 검증 ${summary.verification === "pass" ? "통과" : "부분 완료"} · 임상 ${summary.verifiedRegistry ?? summary.knownStudies}/${summary.expectedRegistry ?? summary.knownStudies} · 공식 원문 ${summary.verifiedSources ?? summary.monitoredSources}/${summary.expectedSources ?? summary.monitoredSources} · 검색 후보 ${summary.relevantCandidates} · PubMed ${summary.literature} · DB 저장 완료 · 새 변경 없음`
        : `${formatUpdateTimestamp(refreshed.registryCheckedAt)} · 새 변경 없음`;
    } else {
      const applied = newChanges.filter(change => change.scope === "registry").length;
      const pending = newChanges.filter(change => change.scope !== "registry").length;
      document.querySelector("#syncStatus").textContent = `새 변경 ${newChanges.length}건 확인`;
      document.querySelector("#syncMeta").textContent = `자동 반영 ${applied}건 · 원문 변경 감지·표 반영 전 ${pending}건`;
    }
  } catch (error) {
    document.querySelector("#syncStatus").textContent = "최신 정보 확인 실패";
    document.querySelector("#syncMeta").textContent = `${error.message} · 마지막 캐시를 유지합니다.`;
    document.querySelector("#syncBar").classList.add("has-error");
  } finally {
    button.disabled = false;
    button.textContent = "최신 정보 확인·반영";
  }
});
document.querySelector("#closeChanges").addEventListener("click", () => {
  document.querySelector("#changePanel").hidden = true;
});

initAutoRefresh();
