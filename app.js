const assets = [
  {
    id: "mazdutide", name: "Mazdutide", aliases: "IBI362 · LY3305677 · OXM3", company: "Innovent / Eli Lilly",
    phase: "승인 + Phase 3 확장", stage: 4, tier: "core", tone: "live",
    signal: "중국 체중관리·T2D 승인. GLORY-2 9 mg에서 60주 전체 efficacy estimand −18.55%.",
    origin: "Lilly가 개발한 oxyntomodulin 유사체. Innovent가 중국 개발·상업화 권리를 확보했다.",
    strategy: "클래스 최초 상업화 benchmark. OSA, MASH, 청소년, 고혈압, HFpEF와 고용량으로 확장 중.",
    watch: ["2026 Q3: 15 mg·HFpEF primary completion", "2027 Q2: GLORY-OSA completion", "2027 Q3: MASH study completion"],
    source: "https://en.innoventbio.com/InvestorsAndMedia/PressReleaseDetail?key=562"
  },
  {
    id: "survodutide", name: "Survodutide", aliases: "BI 456906", company: "Boehringer Ingelheim / Zealand Pharma",
    phase: "Phase 3", stage: 3, tier: "core", tone: "live",
    signal: "SYNCHRONIZE-1 76주 efficacy estimand 최대 −16.6%. GI AE 중단 약 19%가 핵심 부담.",
    origin: "Zealand와 BI가 공동 발명. 2011년 협업에서 BI가 글로벌 개발·상업화 권리를 확보했다.",
    strategy: "글로벌 비만·MASH 후기개발을 동시에 보유한 가장 큰 임상 위협.",
    watch: ["2027 Q1: 기전시험 completion", "2029 Q2: LIVERAGE-Cirrhosis completion", "2031 Q4: LIVERAGE F2–F3 completion"],
    source: "https://www.zealandpharma.com/pipeline/survodutide/"
  },
  {
    id: "pemvidutide", name: "Pemvidutide", aliases: "ALT-801 · SP-1373", company: "Altimmune",
    phase: "Phase 2b → Phase 3 준비", stage: 2.55, tier: "core", tone: "live",
    signal: "MOMENTUM 48주 −15.6%. MASH·AUD·ALD로 적응증을 넓히며 PERFORMA Phase 3를 준비.",
    origin: "Spitfire Pharma의 SP-1373. Altimmune이 2019년 Spitfire를 인수한 뒤 ALT-801, pemvidutide로 전환했다.",
    strategy: "DA-1726의 MetALD 방향과 가장 가까운 적응증 경쟁자.",
    watch: ["2026 H2: PERFORMA Phase 3 개시 계획", "2027 Q3: RESTORE ALD completion", "RECLAIM AUD 결과 공개 일정"],
    source: "https://ir.altimmune.com/news-releases/news-release-details/altimmune-announces-first-quarter-2026-financial-results-and"
  },
  {
    id: "efino", name: "Efinopegdutide", aliases: "MK-6024 · HM12525A · JNJ-64565111", company: "Merck / Hanmi",
    phase: "Phase 2", stage: 2.25, tier: "core", tone: "live",
    signal: "24주 체중 −8.5%; semaglutide 대비 간지방 감소 우위. MASH·보상성 간경변 집중.",
    origin: "Hanmi LAPSCOVERY 자산. Janssen 반환 후 2020년 Merck가 글로벌 독점 라이선스했다.",
    strategy: "체중보다 간 직접효과와 간경변 개발의 대형제약 benchmark.",
    watch: ["2026 Q3: 보상성 간경변 P2 completion", "MASH 조직학 결과", "Merck의 후기개발 전환"],
    source: "https://www.merck.com/research/product-pipeline/"
  },
  {
    id: "azd9550", name: "AZD9550", aliases: "—", company: "AstraZeneca",
    phase: "Phase 2", stage: 2.15, tier: "core", tone: "live",
    signal: "ASCEND Phase 2가 2026년 5월 완료됐으나 결과 미공개. AZD6234 amylin 병용도 탐색.",
    origin: "AstraZeneca 내부 개발 자산. 공개된 외부 라이선스 이력은 확인되지 않았다.",
    strategy: "결과가 아직 보이지 않는 near-term blind spot. 단독과 amylin 병용을 동시에 검증한다.",
    watch: ["ASCEND 결과 공개 일정 미정", "2027 Q1: CONTEMPO completion", "후속 Phase 2/3 선택"],
    source: "https://www.astrazenecaclinicaltrials.com/study/D8460C00004/"
  },
  {
    id: "dd01", name: "Zabopegdutide", aliases: "DD01", company: "D&D Pharmatech",
    phase: "Phase 2 완료", stage: 2, tier: "core", tone: "live",
    signal: "48주 조직학: 섬유화 개선 50.0% vs 15.8%, MASH 해소 62.5% vs 5.3% (소규모 PP).",
    origin: "D&D Pharmatech 자체 개발 장기지속형 자산. 중국 비만 권리는 Shenzhen Salubris에 이전.",
    strategy: "국내 기원 MASH 신호와 중국 비만 확장을 가진 직접 비교자. 다음 글로벌 시험은 미등록.",
    watch: ["후속 임상 등록", "평균 체중변화 공개", "글로벌 기술이전·중국 개발 진행"],
    source: "https://ddpharmatech.com/en/board/board.php?bo_table=press_en&idx=20"
  },
  {
    id: "cms", name: "CMS-D005", aliases: "—", company: "China Medical System",
    phase: "China Phase 1", stage: 1.15, tier: "watch", tone: "watch",
    signal: "중국 Phase 1 진행이 HKEX 공시로 확인되지만 공개 임상·약리 데이터는 제한적.",
    origin: "China Medical System 자체 개발 자산.",
    strategy: "ClinicalTrials.gov에 잡히지 않는 중국 레지스트리 사각지대.",
    watch: ["China Phase 1 결과", "공식 등록번호·용량", "비만 또는 MASH 후속 적응증"],
    source: "https://web.cms.net.cn/en/2024/11/ind-approval-cmss-self-developed-innovative-drug-dual-agonist-of-glucagon-like-peptide-1-receptor-glucagon-receptor-cms-d005-is-approved-for-drug-clinical-trials/"
  },
  {
    id: "da1726", name: "DA-1726", aliases: "—", company: "Dong-A ST / MetaVia",
    phase: "Phase 1 Part 3", stage: 1.45, tier: "core", tone: "internal",
    signal: "비적정 48 mg, n=6에서 Day 54 −9.1%. Part 3는 적정 48/64 mg 목표용량을 검증 중.",
    origin: "Dong-A ST 개발. 2022년 NeuroBo(현 MetaVia)가 한국 제외 글로벌 권리를 라이선스했다.",
    strategy: "내부 기준자산. 후기 경쟁력의 관문은 적정 후 목표용량 도달률과 GI 중단률.",
    watch: ["2026 Q4: FIH 등록상 completion", "Part 3 적정 48/64 mg 데이터", "표본 확대 내약성·MetALD 전략"],
    source: "https://www.sec.gov/Archives/edgar/data/1638287/000110465926082116/tm2620006d1_8k.htm"
  },
  {
    id: "pb718", name: "PB-718", aliases: "PB-119 + PB-722", company: "PegBio",
    phase: "Phase 1/2 완료 · 전략 검토", stage: 1.8, tier: "watch", tone: "watch",
    signal: "두 작용제의 고정용량 복합제. 최신 등록시험 완료 후 후속 전략을 평가 중.",
    origin: "PegBio의 GLP-1RA PB-119와 GCGR agonist PB-722를 조합한 제품.",
    strategy: "동일 수용체쌍의 대체 아키텍처지만 unimolecular class와 직접 동급 비교하지 않는다.",
    watch: ["개발 재개·우선순위 결정", "후속 임상 등록", "고정비율의 차별성"],
    source: "https://diabetesjournals.org/diabetes/article/73/Supplement_1/768-P/156358/768-P-A-Phase-1b-2a-Trial-to-Assess-the-Safety"
  },
  {
    id: "cotadutide", name: "Cotadutide", aliases: "MEDI0382", company: "AstraZeneca / MedImmune",
    phase: "중단", stage: 2, tier: "historical", tone: "watch",
    signal: "T2D·비만·NASH에서 Phase 2 신호를 만들었으나 현재 파이프라인에서 제외.",
    origin: "MedImmune/AstraZeneca의 균형형 GLP-1R/GCGR co-agonist.",
    strategy: "사람 POC가 있어도 포트폴리오 선택과 후기개발성이 별개임을 보여준다.",
    watch: ["중단 사유의 공개 한계", "논문 데이터의 class reference 활용"],
    source: "https://clinicaltrials.gov/search?term=cotadutide"
  },
  {
    id: "nn1177", name: "NN1177", aliases: "NNC9204-1177", company: "Novo Nordisk",
    phase: "중단", stage: 1, tier: "historical", tone: "watch",
    signal: "Phase 1에서 체중감량 신호와 함께 내약성·심박수·혈당 우려가 나타나 개발 중단.",
    origin: "Novo Nordisk 내부 oxyntomodulin 계열 자산.",
    strategy: "GCGR 비중과 치료창 설계가 초기 임상의 존속을 결정하는 대표 사례.",
    watch: ["공개 Phase 1 논문의 정량적 safety benchmark"],
    source: "https://clinicaltrials.gov/search?term=NNC9204-1177"
  },
  {
    id: "sar425899", name: "SAR425899", aliases: "—", company: "Sanofi",
    phase: "중단", stage: 1, tier: "historical", tone: "watch",
    signal: "Phase 1에서 혈당·체중 신호를 보였으나 후속 임상개발이 이어지지 않았다.",
    origin: "Sanofi 내부 개발 GLP-1R/GCGR dual agonist.",
    strategy: "초기 약리효능만으로 자산의 후기 경쟁력이 성립하지 않는 사례.",
    watch: ["기존 비교자; 현재 개발 신호 없음"],
    source: "https://clinicaltrials.gov/search?term=SAR425899"
  },
  {
    id: "opk88003", name: "Pegapamodutide", aliases: "OPK-88003 · MOD-6031", company: "OPKO Health",
    phase: "휴면/중단", stage: 1, tier: "historical", tone: "watch",
    signal: "주 1회 dual agonist로 사람 임상에 진입했지만 후속 활성 개발 근거가 없다.",
    origin: "OPKO의 장기지속형 oxyntomodulin 기반 자산.",
    strategy: "등록시험 완료와 개발 지속은 같은 의미가 아니라는 사례.",
    watch: ["공식 파이프라인 복귀 여부"],
    source: "https://clinicaltrials.gov/search?term=OPK-88003"
  },
  {
    id: "g3215", name: "G3215", aliases: "—", company: "Gubra",
    phase: "임상 1상 이후 비활성", stage: 1, tier: "historical", tone: "watch",
    signal: "초기 임상 진입 기록 이후 현재 활성 개발을 뒷받침하는 공개 신호가 제한적.",
    origin: "Gubra peptide discovery 자산.",
    strategy: "공개정보 공백이 큰 자산은 중단과 미공개를 구분해 관리해야 한다.",
    watch: ["현재 권리자·개발 상태 확인 필요"],
    source: "https://clinicaltrials.gov/search?term=G3215"
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
  {year: 2024, asset: "DD01", sub: "FDA Fast Track", type: "regulatory", title: "MASH Fast Track 지정", text: "초기 간지방 감소 신호를 바탕으로 미국 FDA의 신속개발 지원 대상으로 지정됐다."},
  {year: 2024, asset: "DD01", sub: "China rights", type: "deal", title: "중국 비만 개발권 Salubris로 확장", text: "중국 파트너가 비만 대상 Phase 1 IND 승인을 확보해 미국 MASH와 중국 비만의 이중 경로가 만들어졌다."},
  {year: 2024, asset: "PB-718", sub: "NCT06147544", type: "data", title: "고정용량 조합의 초기 임상 완료", text: "PB-119 GLP-1RA와 PB-722 GCGR agonist의 조합으로 동일 수용체쌍을 구현. 단일분자와 다른 개발 아키텍처다."},
  {year: 2024, asset: "CMS-D005", sub: "China IND", type: "regulatory", title: "중국 임상시험 승인", text: "CMS 자체 개발 이중작용제가 중국 Phase 1에 진입. 글로벌 레지스트리만 검색할 때 누락될 수 있는 자산이다."},
  {year: 2024, asset: "Pemvidutide", sub: "MOMENTUM", type: "data", title: "48주 −15.6% 체중감량", text: "2.4 mg에서 위약 −2.2% 대비 평균 −15.6%. 모든 AE 중단 19.6%로 효능과 유지율을 함께 읽어야 한다."},
  {year: 2025, asset: "Mazdutide", sub: "NMPA", type: "regulatory", title: "중국 체중관리 승인", text: "2025년 6월 과체중·비만 성인의 만성 체중관리로 승인되며 GLP-1R/GCGR class의 상업적 검증을 달성했다."},
  {year: 2025, asset: "Mazdutide", sub: "NMPA", type: "regulatory", title: "중국 T2D 승인", text: "같은 해 혈당조절 적응증까지 확보해 비만·당뇨 양축 제품으로 전환했다."},
  {year: 2025, asset: "AZD9550", sub: "ASCEND", type: "clinical", title: "대규모 Phase 2 검증", text: "377명 규모에서 체중·대사 효능을 검증. 별도 CONTEMPO에서 단독 고용량과 AZD6234 amylin 병용을 시험했다."},
  {year: 2026, asset: "DA-1726", sub: "48 mg MAD", type: "data", title: "비적정 소수 코호트에서 −9.1%", text: "n=6, Day 54 기준 초기 체중 신호. GI disorders 5/6, 구토 5/6이나 치료관련 중단은 없었다. 작은 분모를 후기 임상과 직접 비교할 수 없다."},
  {year: 2026, asset: "Survodutide", sub: "SYNCHRONIZE-1", type: "data", title: "Phase 3 최대 −16.6%, GI 유지율이 쟁점", text: "76주 efficacy estimand 최대 −16.6%. 전체 GI AE 80.9–89.7%, GI AE 중단 약 19%가 후기 benchmark를 형성했다."},
  {year: 2026, asset: "DD01", sub: "NCT06410924", type: "data", title: "48주 조직학 POC", text: "소규모 per-protocol 분석에서 섬유화 개선 50.0% vs 15.8%, MASH 해소 62.5% vs 5.3%. 다음 등록시험은 아직 확인되지 않았다."},
  {year: 2026, asset: "AZD9550", sub: "ASCEND", type: "clinical", title: "Phase 2 완료, 결과 대기", text: "2026년 5월 시험은 완료됐으나 공개 결과가 없어 클래스의 가장 큰 단기 정보 공백 중 하나다."},
  {year: 2026, asset: "DA-1726", sub: "Part 3", type: "clinical", title: "적정 48/64 mg 목표용량 검증", text: "활성 환자들이 목표용량에 도달. 효능보다 목표용량 도달률, GI 발생·중단, 표본 확대 시 재현성이 다음 관문이다."},
  {year: 2026, asset: "Pemvidutide", sub: "PERFORMA", type: "clinical", title: "MASH Phase 3 전환 계획", text: "Altimmune은 2026년 하반기 PERFORMA 개시를 계획. AUD·ALD 임상과 함께 간질환 프랜차이즈를 구축한다."}
];

// null은 공개 근거에서 분기까지 확정하지 못한 이벤트다. 임의 추정하지 않고 연도 전체 밴드로 표시한다.
const eventQuarterHints = [
  2, 4, null, null, 3, null, 3, null, null, null,
  3, 2, 2, 3, null, 1, 1, 4, 2, 4,
  null, 2, 3, null, 1, 2, 2, 2, 3, null
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
  "COT-P2": ["Ambery et al. (2018), MEDI0382 Phase 2a study", "Lancet / PubMed", "https://pubmed.ncbi.nlm.nih.gov/29945727/"],
  "COT-54W": ["Nahra et al. (2021), Cotadutide 54-week Phase 2b", "Diabetes Care / PMC", "https://pmc.ncbi.nlm.nih.gov/articles/PMC8247525/"],
  "NN-P1": ["Friedrichsen et al. (2023), three NN1177 Phase 1 trials", "Clinical Obesity / PubMed", "https://pubmed.ncbi.nlm.nih.gov/37690519/"],
  "SAR-P1": ["Tillner et al. (2019), SAR425899 first-in-human and first-in-patient trials", "Diabetes Obesity and Metabolism / PubMed", "https://pubmed.ncbi.nlm.nih.gov/30091218/"],
  "OPK-TRIAL": ["OPK-88003 Phase 2 clinical study", "ClinicalTrials.gov NCT03406377", "https://clinicaltrials.gov/study/NCT03406377"],
  "CLASS-REVIEW": ["Melson et al. (2025), anti-obesity medication pipeline review", "Frontiers in Endocrinology", "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2025.1630199/full"],
  "MZ-DESIGN": ["Ji et al. (2022), Mazdutide Phase 1b and molecular background", "eClinicalMedicine / PMC", "https://pmc.ncbi.nlm.nih.gov/articles/PMC9561728/"],
  "SV-DESIGN": ["Zimmermann et al. (2022), BI 456906 discovery and preclinical pharmacology", "Molecular Metabolism / PMC", "https://pmc.ncbi.nlm.nih.gov/articles/PMC9679702/"],
  "PM-DESIGN": ["Altimmune, pemvidutide balanced 1:1 receptor potency", "Sponsor scientific presentation", "https://ir.altimmune.com/static-files/e79e68f8-22bc-425e-897b-47a16821a5d7"],
  "EF-DESIGN": ["Efinopegdutide/HM12525A molecular composition and comparable receptor potency", "Patent WO2019171352A2", "https://patents.google.com/patent/WO2019171352A2/en"],
  "DD-RATIO": ["D&D Pharmatech, DD01 GLP-1:glucagon potency ratio 11:1", "Sponsor Phase 2 announcement", "https://www.businesswire.com/news/home/20250616477730/en/DD-Pharmatech-Announces-Positive-Phase-2-Results-for-DD01-in-MASH-with-Robust-Reductions-in-Liver-Fat-Accompanied-by-Improvements-in-Liver-and-Metabolic-Health"],
  "DA-RATIO": ["MetaVia, DA-1726 OXM analogue and 3:1 GLP-1R:GCGR ratio", "Sponsor primary source", "https://ir.metaviatx.com/news-releases/news-release-details/metavia-reports-additional-positive-top-line-results-mad-part-2/"],
  "G3215-P1": ["Hope et al. (2024), adaptive infusion of G3215 Phase 1 trial", "Diabetes Obesity and Metabolism", "https://dom-pubs.onlinelibrary.wiley.com/doi/10.1111/dom.15448"],
  "RATIO-REVIEW": ["Tschöp et al. review, GLP-1/glucagon co-agonist molecular design and potency balance", "Frontiers in Endocrinology / PMC", "https://pmc.ncbi.nlm.nih.gov/articles/PMC8457634/"]
};

const assetReferenceMap = {
  Mazdutide: ["MZ-GLORY2", "MZ-APPROVAL", "MZ-RESULTS"],
  Survodutide: ["SV-P3", "SV-MASH", "SV-SAFETY", "SV-DEAL"],
  Pemvidutide: ["PM-MOMENTUM", "PM-IMPACT", "PM-ACQ", "PM-UPDATE"],
  Efinopegdutide: ["EF-P2", "EF-DEAL", "EF-PIPELINE"],
  AZD9550: ["AZ-ASCEND", "AZ-CONTEMPO"],
  Zabopegdutide: ["DD-P2", "DD-CHINA"],
  DD01: ["DD-P2", "DD-CHINA"],
  "CMS-D005": ["CMS-IND", "CMS-ANNUAL"],
  "DA-1726": ["DA-DATA", "DA-STATUS", "DA-LICENSE"],
  "PB-718": ["PB-ABSTRACT", "PB-ANNUAL"],
  Cotadutide: ["COT-P2", "COT-54W", "CLASS-REVIEW"],
  NN1177: ["NN-P1", "CLASS-REVIEW"],
  SAR425899: ["SAR-P1", "CLASS-REVIEW"],
  Pegapamodutide: ["OPK-TRIAL", "CLASS-REVIEW"],
  G3215: ["CLASS-REVIEW"]
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
 * 비교표 필드 바인딩.
 * 결과값(체중·간·GI·중단)은 선택 임상(trial id)에 종속.
 * 간 약효는 선택 임상에 hasLiver+liver 데이터가 있을 때만 표시.
 * 상세: docs/IDEAS_trial_driven_comparison.md
 */
const COMPARISON_FIELD_BINDING = {
  asset: { trialDependent: false, role: "asset", note: "물질/회사" },
  mechanism: { trialDependent: false, role: "asset", note: "분자 설계·활성비" },
  stage: { trialDependent: false, role: "asset", note: "현재 단계" },
  indication: { trialDependent: false, role: "asset", note: "포트폴리오 적응증 요약" },
  trial: { trialDependent: false, role: "selection", note: "기준 임상 선택" },
  weight: { trialDependent: true, role: "result", note: "체중효능(선택 임상)" },
  liver: { trialDependent: true, role: "result", note: "간 약효(선택 임상에 공개값이 있을 때만)" },
  gi: { trialDependent: true, role: "result", note: "GI 안전성(선택 임상)" },
  discontinuation: { trialDependent: true, role: "result", note: "GI/치료 중단(선택 임상)" },
  rights: { trialDependent: false, role: "asset", note: "기원/권리" },
  next: { trialDependent: false, role: "asset", note: "다음 확인사항(자산 단위 유지)" },
  nextNcts: { trialDependent: false, role: "asset", note: "다음 확인 NCT" },
  refs: { trialDependent: "per-key", role: "mixed", note: "trial 블록 refs" }
};

const TRIAL_DEPENDENT_COMPARISON_KEYS = Object.entries(COMPARISON_FIELD_BINDING)
  .filter(([, meta]) => meta.trialDependent === true)
  .map(([key]) => key);

const TRIAL_DEPENDENT_REF_KEYS = ["trial", "weight", "liver", "gi", "discontinuation"];
const TRIAL_INDEPENDENT_REF_KEYS = ["rights"];
const TRIAL_SELECT_STORAGE_KEY = "competitor-selected-trial-v1";

const comparison = {
  // 자산 단위: indication, rights, next, nextNcts, defaultTrialId, trials[]
  // 임상 단위: id, label, meta, nct?, hasLiver, weight, liver, gi, discontinuation, refs
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
        meta: "NCT06164873 · P3 · 60주",
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
        discontinuation: "<b>GI 중단 약 19%</b>",
        refs: { trial: ["SV-P3"], weight: ["SV-P3"], liver: ["SV-SAFETY"], gi: ["SV-P3"], discontinuation: ["SV-SAFETY"] }
      },
      {
        id: "mash_p2",
        label: "MASH Phase 2",
        meta: "NCT04771273 · P2 · 48주 · 조직학",
        nct: "NCT04771273",
        hasLiver: true,
        weight: "<small>본 시험 주 endpoint는 조직학</small><br>체중 요약 수치는 이 블록에 넣지 않음",
        liver: "<b>MASH 개선(섬유화 비악화)</b><br>Survodutide 2.4 mg 47% · 4.8 mg 62% · 6.0 mg 43%<br>위약 14%<br>MRI-PDFF ≥30% 감소<br>2.4 mg 63% · 4.8 mg 67% · 6.0 mg 57% · 위약 14%<br>섬유화 ≥1단계 개선<br>2.4 mg 34% · 4.8 mg 36% · 6.0 mg 34% · 위약 22%<br><small>Sanyal et al. NEJM · PubMed 초록</small>",
        gi: "오심 66% vs 위약 23%<br>설사 49% vs 23%<br>구토 41% vs 4%<br><small>MASH P2 보고</small>",
        discontinuation: "<small>본 블록에 GI 분리 중단률 미정리</small>",
        refs: { trial: ["SV-MASH"], weight: ["SV-MASH"], liver: ["SV-MASH"], gi: ["SV-MASH"], discontinuation: ["SV-MASH"] }
      }
    ],
    rightsRefs: ["SV-DEAL"]
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
        weight: "<b>Pemvidutide −15.6%</b><br>위약 −2.2%<br><small>2.4 mg · 48주</small>",
        liver: null,
        gi: "오심 51.5%<br>구토 27.8%<br>설사 18.6% · 변비 22.7%",
        discontinuation: "<b>전체 치료중단 19.6%</b><br><small>GI 미분리</small>",
        refs: { trial: ["PM-MOMENTUM"], weight: ["PM-MOMENTUM"], gi: ["PM-MOMENTUM"], discontinuation: ["PM-MOMENTUM"] }
      },
      {
        id: "impact",
        label: "IMPACT",
        meta: "NCT05989711 · P2b · 24주 · MASH · ITT",
        nct: "NCT05989711",
        hasLiver: true,
        weight: "<b>Pemvidutide 1.2 mg −5.0%</b><br>1.8 mg −6.2%<br>위약 −1.0%<br><small>IMPACT 24주 · 회사 topline</small>",
        liver: "<b>MASH 해소(섬유화 비악화, ITT)</b><br>Pemvidutide 1.2 mg 59.1%<br>Pemvidutide 1.8 mg 52.1%<br>위약 19.1%<br>MRI-PDFF 간지방 감소<br>1.2 mg 58.0% · 1.8 mg 62.8% · 위약 16.2%<br>섬유화 개선(MASH 비악화, ITT)<br>1.2 mg 31.8% · 1.8 mg 34.5% · 위약 25.9%<br><small>섬유화 조직학 군간 차이는 통계적 유의성 없음(회사 ITT)</small>",
        gi: "<small>IMPACT 회사 topline</small><br>AE 관련 중단 1.2 mg 0.0% · 1.8 mg 1.2% · 위약 2.4%",
        discontinuation: "<b>AE 관련 중단</b><br>1.2 mg 0.0% · 1.8 mg 1.2% · 위약 2.4%<br><small>회사 topline</small>",
        refs: { trial: ["PM-IMPACT"], weight: ["PM-IMPACT"], liver: ["PM-IMPACT"], gi: ["PM-IMPACT"], discontinuation: ["PM-IMPACT"] }
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
        meta: "NCT04944992 · P2a · 24주 · NAFLD",
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
        meta: "D8460C00004 · P2 · 완료",
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
        gi: "전체 GI disorder<br><b>79% vs 44%</b>",
        discontinuation: "<b>GI 중단 8.0%</b><br><small>biopsy-confirmed set</small>",
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
        meta: "NCT 식별 안 됨",
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
        meta: "NCT06252220 · P1",
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
        meta: "NCT06147544 · 완료",
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
  }
};

function loadSelectedTrials() {
  try {
    return JSON.parse(localStorage.getItem(TRIAL_SELECT_STORAGE_KEY) || "{}") || {};
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

function getComparisonTrials(entry) {
  if (!entry) return [];
  if (Array.isArray(entry.trials) && entry.trials.length) return entry.trials;
  return [];
}

function getSelectedTrialId(assetId, entry) {
  const trials = getComparisonTrials(entry);
  if (!trials.length) return null;
  const stored = loadSelectedTrials()[assetId];
  if (stored && trials.some(t => t.id === stored)) return stored;
  if (entry.defaultTrialId && trials.some(t => t.id === entry.defaultTrialId)) return entry.defaultTrialId;
  return trials[0].id;
}

function getActiveTrial(assetId, entry) {
  const trials = getComparisonTrials(entry);
  const id = getSelectedTrialId(assetId, entry);
  return trials.find(t => t.id === id) || trials[0] || null;
}

/** 드롭다운: 기본 임상 + 간 약효 공개 임상이 둘 이상일 때 */
function shouldShowTrialSelect(entry) {
  const trials = getComparisonTrials(entry);
  if (trials.length <= 1) return false;
  const hasLiverTrial = trials.some(t => t.hasLiver && t.liver);
  const hasNonLiverDefault = trials.some(t => !t.hasLiver || !t.liver);
  // 간 약효 임상이 기본과 분리되어 있거나, 선택 가능한 임상 블록이 2개 이상
  return hasLiverTrial || trials.length > 1;
}

function missingForTrial(label) {
  return `<span class="muted-cell">선택 임상 기준 ${label} 공개값 없음</span>`;
}

function liverCellForTrial(trial) {
  if (trial?.hasLiver && trial.liver) return trial.liver;
  return `<span class="muted-cell">선택 임상에 공개 간 약효 없음</span><br><small>간 약효가 있는 임상을 핵심 임상에서 선택하세요</small>`;
}

function renderTrialCell(assetId, entry, trial, rowRefs) {
  const trials = getComparisonTrials(entry);
  const showSelect = shouldShowTrialSelect(entry);
  const refs = cite(trial?.refs?.trial || rowRefs);
  const nctBits = nctCitations(`${trial?.nct || ""} ${trial?.meta || ""}`);
  if (!showSelect || !trial) {
    const html = trial
      ? `${escapeHtml(trial.label)}<br><span>${escapeHtml(trial.meta || "")}</span>`
      : "임상 미지정";
    return `${html}<span class="cell-refs">${refs}</span>${nctBits}`;
  }
  const options = trials.map(t => {
    const tag = t.hasLiver && t.liver ? " · 간약효" : "";
    const selected = t.id === trial.id ? " selected" : "";
    return `<option value="${escapeHtml(t.id)}"${selected}>${escapeHtml(t.label)}${escapeHtml(tag)}</option>`;
  }).join("");
  return `<label class="trial-select-label"><span class="trial-select-caption">기준 임상</span>
    <select class="trial-select" data-asset-id="${escapeHtml(assetId)}" aria-label="${escapeHtml(assetId)} 핵심 임상 선택">${options}</select>
    </label>
    <div class="trial-select-meta"><span>${escapeHtml(trial.meta || "")}</span>
    <span class="cell-refs">${refs}</span>${nctBits}</div>`;
}

const mechanismProfiles = {
  mazdutide: {
    text: "<b>Mammalian oxyntomodulin analogue</b><br>지방산 side chain 기반 장기지속 peptide<br>GLP-1R:GCGR functional ratio: <b>공개 수치 없음</b>",
    refs: ["MZ-DESIGN"]
  },
  survodutide: {
    text: "<b>장기지속 단일분자 peptide</b><br>GLP-1R:GCGR ≈ <b>8:1</b><br><small>human plasma functional assay</small>",
    refs: ["SV-DESIGN"]
  },
  pemvidutide: {
    text: "<b>29-aa 단일분자 peptide</b><br>glycolipid surfactant/EuPort 반감기 연장<br>GLP-1R:GCGR = <b>1:1</b>",
    refs: ["PM-DESIGN"]
  },
  efino: {
    text: "<b>Modified OXM–PEG–IgG4 Fc conjugate</b><br>양 수용체 comparable potency<br>정확한 수치: <b>공개 없음</b>",
    refs: ["EF-DESIGN", "RATIO-REVIEW"]
  },
  azd9550: {
    text: "<b>GLP-1R/GCGR 단일분자 이중작용제</b><br>parent scaffold·functional ratio: <b>공개 없음</b>",
    refs: ["AZ-ASCEND"]
  },
  dd01: {
    text: "<b>Proprietary 장기지속 peptide</b><br>GLP-1R:GCGR = <b>11:1</b>",
    refs: ["DD-RATIO"]
  },
  cms: {
    text: "<b>GLP-1R/GCGR 이중작용제</b><br>parent scaffold·functional ratio: <b>공개 없음</b>",
    refs: ["CMS-IND", "CMS-ANNUAL"]
  },
  da1726: {
    text: "<b>Oxyntomodulin analogue</b><br>GLP-1R:GCGR = <b>3:1</b><br><small>회사 공개 receptor-activity ratio</small>",
    refs: ["DA-RATIO"]
  },
  pb718: {
    text: "<b>PB-119 GLP-1RA + PB-722 GCGR agonist</b><br>고정용량 복합제 · 단일분자 아님<br>성분·활성비: <b>공개 수치 없음</b>",
    refs: ["PB-ABSTRACT", "PB-ANNUAL"]
  },
  cotadutide: {
    text: "<b>OXM 기반 synthetic linear peptide</b><br>GLP-1R:GCGR = <b>5:1</b> in vitro<br>human plasma에서 약 <b>8:1</b>",
    refs: ["COT-P2", "SV-DESIGN"]
  },
  nn1177: {
    text: "<b>장기지속 GLP-1R/GCGR peptide</b><br>GLP-1R:GCGR ≈ <b>3:1</b><br><small>human plasma functional assay</small>",
    refs: ["NN-P1", "SV-DESIGN"]
  },
  sar425899: {
    text: "<b>Synthetic dual-agonist polypeptide</b><br>양 수용체 유사 potency로 보고<br>표준화된 ratio: <b>공개 없음</b>",
    refs: ["SAR-P1", "RATIO-REVIEW"]
  },
  opk88003: {
    text: "<b>장기지속 oxyntomodulin analogue</b><br>GLP-1R:GCGR ratio: <b>공개 수치 없음</b>",
    refs: ["OPK-TRIAL", "CLASS-REVIEW"]
  },
  g3215: {
    text: "<b>GLP-1R/GCGR co-agonist peptide</b><br>adaptive continuous infusion 개발<br>functional ratio: <b>공개 수치 없음</b>",
    refs: ["G3215-P1"]
  }
};

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
  registryTimelineEvents = Object.values(snapshot?.programs || {}).flatMap(program =>
    (program.studies || []).flatMap(study => {
      const date = study.primaryCompletion || study.completion;
      if (!date || date < cutoff) return [];
      const match = String(date).match(/^(\d{4})-(\d{2})/);
      if (!match) return [];
      const year = Number(match[1]);
      const quarter = Math.ceil(Number(match[2]) / 3);
      return [{
        year,
        quarter,
        asset: program.label,
        sub: `${study.nctId} · ClinicalTrials.gov live`,
        type: "future",
        title: `${study.title} 주요 완료 예정`,
        text: `${formatRegistryStatus(study.status)} · primary completion ${formatDate(study.primaryCompletion)} · study completion ${formatDate(study.completion)}`
      }];
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
    stageTarget.insertAdjacentHTML("beforeend", `
      <div class="live-registry"><span>진행·모집 예정 임상 ${active.length}건 (추적 ${program.studies.length}건)</span>
      ${mostRecent ? `<a href="https://clinicaltrials.gov/study/${mostRecent.nctId}" target="_blank" rel="noopener">등록정보 갱신일: ${formatDate(mostRecent.lastUpdate)} · ${mostRecent.nctId} · ${formatRegistryStatus(mostRecent.status)}</a>` : ""}</div>`);
    const milestone = program.nextMilestone;
    if (milestone) {
      watchTarget.insertAdjacentHTML("beforeend", `
        <div class="live-registry"><a href="https://clinicaltrials.gov/study/${milestone.nctId}" target="_blank" rel="noopener">다음 등록 일정: ${milestone.nctId} · ${formatDate(milestone.date)} ${milestone.kind === "primary completion" ? "주요 완료 예정" : "시험 완료 예정"}</a></div>`);
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

function applyLiveSnapshot(snapshot) {
  liveSnapshot = snapshot;
  rebuildRegistryTimeline(snapshot);
  const programCount = Object.keys(snapshot?.programs || {}).length;
  const studyCount = Object.values(snapshot?.programs || {}).reduce((sum, program) => sum + (program.studies?.length || 0), 0);
  const errors = snapshot?.errors?.length || 0;
  const exactCheckedAt = formatUpdateTimestamp(snapshot?.registryCheckedAt);
  document.querySelector("#infoUpdatedAt").textContent = exactCheckedAt;
  document.querySelector("#syncStatus").textContent = `임상등록 ${studyCount}건 최신 확인`;
  document.querySelector("#syncMeta").textContent =
    `${programCount}개 프로그램 · ${exactCheckedAt} 업데이트 (${relativeTime(snapshot?.registryCheckedAt)})${errors ? ` · 오류 ${errors}건은 캐시 유지` : ""}`;
  document.querySelector("#syncBar").classList.toggle("has-error", Boolean(errors));
  renderMaster();
  renderTimeline();
  renderSources();
  renderChanges(snapshot);
}

// v2: liver 기본 숨김 반영. 키를 바꾸면 기존 localStorage 대신 DEFAULT_HIDDEN을 다시 적용한다.
const COLUMN_STORAGE_KEY = "competitor-master-hidden-columns-v2";
// 페이지를 처음 열 때(localStorage 없음) 기본으로 숨길 열. 나머지 열만 열린 상태로 표시된다.
// 사용자가 '표시 항목'에서 바꾸면 그 선택이 localStorage에 저장돼 이 기본값을 대체한다.
// 새 열 규칙: index.html <th data-column-key="..."> 를 추가하면 masterColumns()/표시 항목에 자동 포함된다.
// liver: 기본 숨김 → 사용자가 표시 항목에서 켠 뒤에만 보임
const DEFAULT_HIDDEN_COLUMNS = ["mechanism", "liver", "rights", "next"];
let hiddenMasterColumns = new Set();
try {
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

function renderMaster() {
  const tier = document.querySelector("#masterTier").value;
  const query = document.querySelector("#masterSearch").value.trim().toLowerCase();
  const rows = assets.filter(a => {
    const tierMatch = tier === "all" || a.tier === tier;
    const textMatch = !query || `${a.name} ${a.aliases} ${a.company}`.toLowerCase().includes(query);
    return tierMatch && textMatch;
  });
  document.querySelector("#masterRows").innerHTML = rows.map(a => {
    const entry = getComparisonEntry(a.id);
    const trial = entry ? getActiveTrial(a.id, entry) : null;
    const indication = entry?.indication || "개발 중단·비활성 자산";
    const rights = entry?.rights || a.origin;
    const nextHtml = entry?.next || a.watch.join("<br>");
    const nextNcts = entry?.nextNcts || [];
    const rowRefs = assetReferenceMap[a.name] || [];
    const cellRefs = key => {
      const keys = trial?.refs?.[key] || (key === "rights" ? entry?.rightsRefs : null) || rowRefs;
      return `<span class="cell-refs">${cite(keys)}</span>`;
    };
    const weight = trial?.weight || a.signal || missingForTrial("체중효능");
    const gi = trial?.gi || missingForTrial("GI");
    const disc = trial?.discontinuation || missingForTrial("중단");
    const liverHtml = trial ? liverCellForTrial(trial) : missingForTrial("간 약효");
    const liverNct = trial?.hasLiver && trial.liver
      ? nctCitations(`${trial.nct || ""} ${trial.liver}`)
      : "";
    const mechanism = mechanismProfiles[a.id] || { text: "공개 분자설계 정보 없음", refs: rowRefs };
    const statusClass = a.tier === "historical" ? "historical" : a.tier === "watch" ? "watch" : "";
    const trialCell = entry
      ? renderTrialCell(a.id, entry, trial, rowRefs)
      : `${a.phase}<br><span>현재 활성 개발 없음</span>`;
    return `<tr data-asset-id="${a.id}">
      <td><b class="asset-name">${a.name}${a.id === "da1726" ? '<span class="internal-mark">INTERNAL</span>' : ""}</b><span class="muted-cell">${a.aliases}<br>${a.company}</span>${cellRefs("rights")}</td>
      <td>${mechanism.text}<span class="cell-refs">${cite(mechanism.refs)}</span></td>
      <td class="stage-cell"><span class="status ${statusClass}">${a.phase}</span></td>
      <td>${indication}</td>
      <td class="trial-cell">${trialCell}</td>
      <td>${weight}${cellRefs("weight")}</td>
      <td class="liver-cell">${liverHtml}${trial?.hasLiver && trial.liver ? cellRefs("liver") : ""}${liverNct}</td>
      <td>${gi}${cellRefs("gi")}</td>
      <td>${disc}${cellRefs("discontinuation")}</td>
      <td>${rights}${cellRefs("rights")}</td>
      <td class="watch-cell"><ul class="watch-list">${a.watch.map(w => `<li>${w}</li>`).join("")}</ul>${(nextNcts || []).map(registryCitation).join(" ")}<div class="muted-cell">${nextHtml}</div></td>
    </tr>`;
  }).join("");
  document.querySelector("#masterEmpty").hidden = rows.length > 0;
  if (liveSnapshot) applyLiveRows(liveSnapshot);
  applyColumnVisibility();
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
    return typeMatch && textMatch && e.year >= startYear && e.year <= endYear;
  });
  const years = Array.from({length: endYear - startYear + 1}, (_, i) => startYear + i);
  const cols = years.length * 4;
  const canonicalAsset = name => name === "DD01" ? "Zabopegdutide" : name;
  const assetOrder = assets.map(a => a.name);
  const groupedAssets = [...new Set(filtered.map(e => canonicalAsset(e.asset)))]
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
    const assetEvents = filtered.filter(e => canonicalAsset(e.asset) === assetName).sort((a,b) => a.year - b.year || (a.qStart || a.quarter || 0) - (b.qStart || b.quarter || 0));
    const isOpen = openTimelineAssets.has(assetName) || Boolean(query);
    return `<section class="asset-group ${isOpen ? "" : "collapsed"}" data-timeline-asset="${encodeURIComponent(assetName)}">
      <div class="asset-group-head">
        <div class="asset-group-title">
          <div>
            <b>${assetName}</b><span>${asset ? asset.company : ""}</span>
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

function renderDossiers(tier = "core") {
  document.querySelector("#dossierGrid").innerHTML = assets.filter(a => a.tier === tier).map(a => `
    <article class="dossier" tabindex="0" data-id="${a.id}" aria-expanded="false">
      <div class="dossier-summary">
        <div><h3>${a.name}</h3><span class="aliases">${a.aliases}</span></div>
        <span class="company">${a.company}</span>
        <p class="signal">${a.signal} ${cite(assetReferenceMap[a.name] || [])}</p>
        <span class="expand" aria-hidden="true">+</span>
      </div>
      <div class="dossier-detail">
        <div><h4>기원 / 권리</h4><p>${a.origin} ${cite(assetReferenceMap[a.name] || [])}</p><h4>현재 판단</h4><p>${a.strategy} ${cite(assetReferenceMap[a.name] || [])}</p></div>
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
  const nctText = `${[...events, ...registryTimelineEvents].map(event => `${event.sub} ${event.text}`).join(" ")} ${JSON.stringify(comparison)}`;
  const baseUrls = Object.values(references).map(ref => ref[2]);
  const citedNcts = [...new Set(nctText.match(/NCT\d{8}/g) || [])].filter(nct => !baseUrls.some(url => url.includes(nct))).sort();
  const baseCards = Object.entries(references).map(([key, ref]) => `
    <article class="source-card" id="ref-${key}">
      <span class="source-num">[${key}]</span><b>${ref[0]}</b><p>${ref[1]}</p>
      <a href="${ref[2]}" target="_blank" rel="noopener">원문 열기 ↗</a>
    </article>`).join("");
  const registryCards = citedNcts.map(nct => `
    <article class="source-card" id="ref-${nct}">
      <span class="source-num">[${nct}]</span><b>${nct} study record</b><p>ClinicalTrials.gov 등록시험 원장</p>
      <a href="https://clinicaltrials.gov/study/${nct}" target="_blank" rel="noopener">원문 열기 ↗</a>
    </article>`).join("");
  document.querySelector("#sourceGrid").innerHTML = baseCards + registryCards;
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

initReportTabs();
initColumnSelector();
initTrialSelectHandlers();
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
      if (deployed.registryCheckedAt) applyLiveSnapshot(deployed);
      markStaticDeployMode(status, meta, deployed);
    } catch {
      markStaticDeployMode(status, meta, null);
    }
    return;
  }
  try {
    const cached = await requestSnapshot("/api/snapshot");
    if (cached.registryCheckedAt) applyLiveSnapshot(cached);
    status.textContent = "ClinicalTrials.gov 최신값 확인 중";
    meta.textContent = "기존 데이터는 그대로 보이며 확인이 끝나면 자동 반영됩니다.";
    const fresh = await requestSnapshot("/api/refresh");
    applyLiveSnapshot(fresh);
  } catch (error) {
    // API 없는 정적 배포(GitHub Pages): 커밋된 data/latest.json 사용
    try {
      const deployed = await loadDeployedSnapshot();
      if (deployed.registryCheckedAt) applyLiveSnapshot(deployed);
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
    applyLiveSnapshot(refreshed);
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
