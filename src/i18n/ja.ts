export const ja = {
  meta: {
    title: '神山まるごと高専 紹介サイト',
    description:
      '徳島・神山町から、テクノロジーとデザインで未来をつくる。15歳から起業家精神を育む全寮制の私立高等専門学校 ── 神山まるごと高専を紹介する非公式ファンサイトです。',
  },
  nav: {
    about: '学校概要',
    curriculum: 'カリキュラム',
    campus: 'キャンパス',
    faculty: '教員',
    life: '学生生活',
    news: 'ニュース',
    access: 'アクセス',
    official: '公式サイト',
  },
  hero: {
    eyebrow: 'KAMIYAMA COLLEGE OF TECHNOLOGY',
    title: 'テクノロジーと\nデザインで、\n人間の未来を変える。',
    lead: '徳島の山あいの町・神山から、起業家精神を育む全寮制の私立高等専門学校。15歳の春、霧の向こうへ。',
    primary: '学校を知る',
    secondary: '公式サイトへ',
  },
  about: {
    heading: '学校概要',
    subheading: '"モノをつくる力で、コトを起こす人。"',
    body: '神山まるごと高専は、2023年4月に徳島県神山町に開校した、起業家精神を育む全寮制の私立高等専門学校です。テクノロジー × デザイン × 起業家精神の三本柱で、15歳から20歳までの5年間を過ごします。',
    pillars: [
      { title: 'テクノロジー', body: 'AI・プログラミング・ハードウェアまで、つくる技術を徹底的に磨く。' },
      { title: 'デザイン', body: 'ユーザーと社会を観察し、課題を再定義し、形にする力を養う。' },
      { title: '起業家精神', body: '実在の事業に触れ、事業計画から実装まで自走する経験を積む。' },
    ],
  },
  curriculum: {
    heading: 'カリキュラム',
    lead: '5年一貫の高専制度のメリットを最大化。学年を追うごとに「学ぶ → つくる → 起こす」へと比重が移っていきます。',
    items: [
      { year: '1年', title: 'まなぶ', body: '基礎学問・基礎プログラミング・寮生活でのチームづくり。' },
      { year: '2年', title: 'つくる', body: 'プロトタイピング、デザインリサーチ、社会との接続を体験。' },
      { year: '3年', title: 'ためす', body: '地域企業・スタートアップとの実践プロジェクト。' },
      { year: '4年', title: 'ふかめる', body: '専門選択・研究・海外短期プログラム。' },
      { year: '5年', title: 'おこす', body: '卒業研究 = 起業 or 自分の実装。社会実装に挑戦。' },
    ],
  },
  campus: {
    heading: 'キャンパス & 施設',
    lead: '校舎は神山の自然に溶け込む木造建築。ファブラボ、図書スペース、寮、食堂が一体となったキャンパスです。',
    facilities: [
      { name: '校舎棟', body: '木と土の温もりに包まれた学習空間。' },
      { name: 'ファブラボ', body: '3Dプリンタ、レーザーカッター、電子工作機材を完備。' },
      { name: '寮（HOME）', body: '5年間の生活拠点。学生・教職員が同じ屋根の下で暮らす。' },
      { name: '食堂', body: '地元食材をふんだんに使った、毎日の楽しみ。' },
    ],
  },
  faculty: {
    heading: '教員 & メンター',
    lead: '研究者・起業家・デザイナー・エンジニアが一体となって、学生の挑戦を伴走します。',
    members: [
      { name: '常勤教員', role: '基礎科目から専門演習まで', body: '5年一貫教育で、学びを深く伴走。' },
      { name: 'クリエイティブ・パートナー', role: '第一線のクリエイター陣', body: '実プロジェクトを通じて学生の感性を引き出す。' },
      { name: '起業家メンター', role: '実在の起業家', body: '事業構想から実装までを伴走する。' },
    ],
  },
  life: {
    heading: '学生生活 & 寮（HOME）',
    lead: '神山の四季と共に暮らす、5年間の全寮生活。',
    points: [
      '学生・教職員が同じキャンパスで生活',
      '地域の祭事・農作業への参加',
      '個室＋共有ラウンジで、独立と協働を両立',
      '徒歩圏に温泉、川、山。学外活動も豊かに',
    ],
  },
  news: {
    heading: 'ニュース',
    empty: '準備中です。',
    readMore: '続きを読む',
  },
  access: {
    heading: 'アクセス',
    address: '〒771-3310 徳島県名西郡神山町神領字北 132',
    transport: '徳島阿波おどり空港 → 徳島駅 → 路線バス「神山高専前」下車',
    officialLinkLabel: '公式サイト: kamiyama.ac.jp',
    officialLinkUrl: 'https://kamiyama.ac.jp/',
    mapLabel: 'Google マップで開く',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=%E7%A5%9E%E5%B1%B1%E3%81%BE%E3%82%8B%E3%81%94%E3%81%A8%E9%AB%98%E5%B0%82',
  },
  footer: {
    disclaimer: '本サイトは学習目的で作成された非公式の紹介ページです。最新の情報は公式サイトをご確認ください。',
    copyright: '© 2026 ghcp-school-intro demo',
  },
  switcher: {
    label: 'Language',
    ja: '日本語',
    en: 'English',
  },
} as const;

export type Dict = typeof ja;
