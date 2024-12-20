import { Link } from "react-router-dom";

const disease = [
  {
    id: 0,
    title: "두통",
    types: [
      {
        id: 1,
        title: "긴장두통",
        content: [
          "긴장두통의 확실한 치료법은 없지만, 약국에서 쉽게 구할 수 있는 진통제(아스피린, 아세트아미노펜, 비스테로이드소염진통제)로 통증을 조절할 수 있습니다. 스트레스, 불안, 초조, 우울감, 예민함이 긴장두통과 관련되어 있을 수 있으므로 항우울제, 항불안제 등의 약물이 필요할 때도 있습니다.",
        ],
      },
      {
        id: 2,
        title: "편두통",
        content: [
          "편두통의 치료 원칙은 크게 두 가지입니다. 편두통이 생기지 않도록 예방하고, 편두통의 전조증상이 생겼다면 빨리 두통이 호전되도록 치료해야 합니다.",
          "약물치료를 통해 편두통의 횟수와 강도를 조절할 수 있으며, 전구기나 전조기까지만 겪고 두통기가 오지 않도록 예방할 수 있습니다. 편두통의 전조증상이 시작되었다면, 우선 아세트아미노펜, 소염진통제가 도움 될 수 있고 여기에 반응이 없다면 트립탄 등의 편두통 치료 약물을 단독 혹은 아세트아미노펜이나 소염진통제와 함께 사용할 수 있습니다. 그러나 트립탄은 혈관 수축 작용이 있어 협심증 등의 혈관 질환이 있는 사람은 사용하지 않아야 하며 그렇지 않더라도 의사와 사용의 필요성, 간격을 잘 상의하여야 합니다. 투약 횟수가 주 3회 이상이 된다면 도리어 약물 과용 두통으로 옮겨갈 수 있어, 예방 약물을 규칙적으로 먹는 예방요법으로 바꾸는 게 나은데, 이때 사용되는 예방 약물로는 베타차단제, 토피라메이트가 있습니다.",
        ],
      },
      {
        id: 3,
        title: "군발두통",
        content: [
          "아스피린, 아세트아미노펜, 소염진통제는 군발두통에는 효과적이지 않습니다. 산소마스크로 산소를 흡입하는 것이 도움이 되고 이를 위해 가정 또는 이동 시 사용할 산소를 갖추는 것이 좋습니다. 다른 약제로는 피하 주사 또는 비강 내 뿌리는 트립탄제를 사용할 수 있습니다.",
        ],
      },
    ],
  },
  {
    id: 1,
    title: "기침",
    types: [
      {
        id: 1,
        title: "상기도감염(감기)",
        content: [
          "상기도 감염(Upper Respiratory Tract Infection, URI)은 주로 감기를 포함하며, 대부분 바이러스에 의해 발생합니다. 일반의약품은 상기도 감염의 증상을 완화하는 데 도움을 줄 수 있지만, 감염 자체를 치료하지는 못합니다. 대부분의 경우 충분한 휴식, 수분 섭취, 그리고 증상 완화가 핵심입니다. 상기도 감염에 도움이 되는 성분으로는 페닐에프린, 덱스트로메토르판, 아세트아미노펜 등이 있습니다.",
        ],
      },
      {
        id: 2,
        title: "급성기관지염",
        content: [
          "발열과 전신이 아픈 느낌을 완화하기 위해 아세트아미노펜이나 이부프로펜을 복용할 수 있고, 충분한 양의 수분을 섭취해야 합니다.",
          " 항생제는 바이러스성 기관지염에 도움이 되지 않습니다. 대부분의 급성 기관지염은 바이러스성이므로, 의사는 감염이 박테리아에 의해 야기된 것이 확실할 때에만(예를 들어, 발병 시기에) 항생제를 투여합니다.",
          "항생제를 사용하는 경우, 의사는 일반적으로 아지스로마이신 또는 클라리스로마이신과 같은 약물을 투여합니다. 때때로 의사는 항생제를 처방하지만 증상이 지속되는 경우에만 사용하도록 권장합니다.",
        ],
      },
      {
        id: 3,
        title: "감염 후 기침(post-infectious cough)",
        content: [
          "감염 후 기침을 완화시키기 위해서는 다음과 같은 방법을 시도해볼 수 있습니다.",
          "• 건조한 공기는 호흡기를 자극해 기침을 악화시킬 수 있으므로, 가습기로 실내 습도를 50~60% 정도로 관리합니다.",
          "• 하루에 1.5~2L 정도의 물을 자주 마셔 목과 기관지를 촉촉하게 합니다.",
          "• 레몬이나 꿀을 넣은 따뜻한 차를 마십니다.",
          "후비루(postnasal drip) 증상이 있거나 목의 가래를 자주 뱉어 내는 경우에는 항히스타민제와 함께 울혈제거제, 거담제 등을 복용할 수 있습니다.",
          "이렇게 1주 이상 치료하였음에도 증상이 좋아지지 않는다면 부비동염이 동반되었는지 확인해야 합니다.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "피부발진",
    types: [
      {
        id: 1,
        title: "가려움발진",
        content: [
          "가려움발진이나 아토피 피부염을 치료하기 위해서는 건조한 피부의 보습, 피부염 치료를 위한 부신피질호르몬제, 면역조절제, 국소 면역조절제와 가려움증을 치료하기 위한 항히스타민제가 사용됩니다.",
          "항히스타민제의 주성분으로는 로라타닌, 세티리진, 클로르페니라민, 펙소페다닌 등이 있습니다.",
        ],
      },
      {
        id: 2,
        title: "두드러기",
        content: [
          "주로 저녁에만 나타나는 가벼운 두드러기인 경우 국소 도포제나 미지근한 물로 샤워를 하여 증상을 조절할 수 있습니다. 또한 과도한 스트레스도 두드러기를 악화시킬 수 있으므로 스트레스 관리가 필요합니다. 두드러기 치료 약물로는 항히스타민제를 가장 많이 사용합니다.",
          "항히스타민제의 주성분으로는 로라타닌, 세티리진, 클로르페니라민, 펙소페다닌 등이 있습니다.",
        ],
      },
      {
        id: 3,
        title: "피부묘기증",
        content: [
          "근본적인 치료법은 없으며, 치료는 대개 증상 조절을 목적으로 합니다. 다른 두드러기와 마찬가지로 항히스타민제가 가장 중요한 약제입니다. 피부묘기증이 발생하는 빈도와 정도에 따라 투여 용량을 조절하거나, 여러 가지 항히스타민제를 복합하여 사용하기도 합니다. 또한 개인마다 사용하는 항히스타민제의 종류에 따라 잘 듣는 경우가 있고 안 듣는 경우가 있으므로 한 종류뿐의 항히스타민제만 쓰지 말고 내과나 피부과 등에서 상의하여 다양한 종류의 항히스타민제를 처방받아 본인에게 맞는 약을 찾아보는 것이 좋습니다.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "미열",
    types: [
      {
        id: 1,
        title: "발열",
        content: [
          "발열은 열 자체로 인해 불편해지는 경우, 의사는 열을 낮추는 아세트아미노펜 또는 이부프로펜과 같은 약물을 투여할 수 있습니다. 수액 섭취를 늘리고 시원한 옷을 착용하는 것이 컨디션에 도움이 될 수 있습니다. 또한 컨디션과 체온에 따라, 발열을 치료하지 않아도 될 수 있습니다. 발열은 신체가 감염과 싸우고 있음을 의미합니다. 또한 이는 수액 섭취를 늘리고 시원한 옷을 착용하는 것이 또한 컨디션에 도움이 될 수 있습니다. 열이 105.8° F(41.0° C)보다 높은 경우, 병원에 입원해야 할 수 있습니다. 병원에서 정맥내(IV)로 수액을 투여하고 냉각 담요를 제공할 것입니다.",
        ],
      },
      {
        id: 2,
        title: "감기&몸살",
        content: [
          "감기는 바이러스의 종류가 다양하기 때문에, 대부분은 특별한 치료 없이 1주일 이내에 저절로 좋아집니다. 하지만 심한 감염이나 다른 의학적 문제가 원인인 경우에는 회복 기간이 더 길어질 수 있습니다. 그리고 감기 몸살에 걸렸을 때 가장 효과적인 방법 중 하나는 땀이 흐르도록 하는 것입니다. 몸에 무리를 안주면서 땀을 내기에 가장 좋은 것은 역시 목욕인데요. 따뜻한 물에 에센셜 오일을 떨어뜨려 목욕을 해주는 것이 좋습니다. 특히 라벤더에는 진정 효과가 있어 방향욕을 할 때 좋은데요. 인후통이나 기침 증상이 있으면 유칼립투스 오일도 효과적입니다.",
        ],
      },
      {
        id: 3,
        title: "오한",
        content: [
          "가천대 길병원 가정의학과 어떤 교수는 “오한이 있다는 것은 이미 몸에 열이 있다는 것”이라며 “춥다고 갑자기 너무 따뜻하게 하면 증상을 더 악화시킬 수 있어 서서히 심부온도를 올려야한다”고 말했습니다. 또한 오한은 몸을 따뜻하게 유지하는 것이 중요합니다. 담요를 덮거나 따뜻한 옷을 입어 체온을 유지하고 이불을 덮거나 따뜻한 차를 마시고 안정을 취하는 것이 필요하며, 수분을 충분히 섭취하는 것이 중요하여 따뜻한 물이나 차를 마셔 몸을 따뜻하게 하고 탈수를 예방하는 데 도움이 됩니다. 또한 충분한 휴식을 취하여 몸이 회복할 수 있도록 해야됩니다. 무리한 활동은 피하는 것이 좋습니다. 또 체온을 측정하여 발열이 있는지 확인하고 발열이 동반된다면 타이레놀과 같은 해열제를 복용해 볼 수 있습니다. 이는 열이 떨어지는 증상 중 하나이므로 너무 걱정하지 않으셔도 됩니다. 마지막으로 오한이 지속되거나 다른 증상이 동반된다면, 의사와 상담하여 정확한 진단과 치료를 받는 것이 좋습니다. 오한은 다양한 원인에 의해 발생할 수 있으므로, 증상이 심하거나 지속될 경우 전문적인 의료 상담을 받는 것이 중요합니다.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "근육통",
    types: [
      {
        id: 1,
        title: "섬유근육통",
        content: [
          "이 질환의 치료에는 질환에 대한 교육 및 운동, 수면 및 통증 등에 대한 약물 치료 등이 중요합니다. 약물 치료의 첫 단계는 주로 항우울제로 개발된 약제들인 아미트립틸린(amitriptyline), 노르트립틸린(nortriptyline), 독세핀(doxepin) 등을 잠을 자기 1~2시간 전에 복용하는 것입니다. 저용량으로 시작하여 효과가 나타날 때까지 증량하면서, 변비나 입 마름, 체중 증가, 졸림 등의 약물 부작용이 있는지 살핍니다. 역시 비슷한 항우울제인 플루옥세틴(fluoxetine)이나 파록세틴(paroxetine), 둘록세틴(duloxetine) 등이 효과가 있다고 알려져 있으며, 최근에 프리가발린(pregabalin), 밀나시프란(milnacipran) 등의 약제가 임상 시험에서 효과가 있는 것으로 연구되었습니다. 소염진통제는 약간 도움이 될 뿐이고, 스테로이드나 마약성 진통제는 거의 효과가 없으므로 사용하지 않습니다. 진통이 심한 경우 트라마돌(tramadol)이 효과가 있는 것으로 임상 시험에서 입증되었습니다.",
        ],
      },
      {
        id: 2,
        title: "근골격계 통증",
        content: [
          "근골격계 통증은 아세트아미노펜과 같은 진통제, 비스테로이드성 항염증제(NSAID) 또는 통증이 중증인 경우 아편유사제를 권장할 수 있습니다. 원인에 따라, 냉찜질 또는 온찜질, 관절 고정이 근골격 통증 완화에 도움이 될 수 있습니다. 아세트아미노펜은 주로 경미한 통증을 완화하는 데 사용되며, 주로 두통, 근육통, 경미한 관절 통증에 효과적입니다. 그러나 염증을 동반한 통증에는 NSAID가 더 효과적일 수 있습니다. 이부프로펜이나 나프록센 같은 NSAID는 염증과 부종을 줄여주며, 관절염, 근육의 염좌, 염증으로 인한 통증을 완화합니다. 중증 통증이 있을 경우, 아편유사제 같은 강력한 진통제가 필요할 수 있습니다. 아편유사제는 극심한 통증을 완화하지만, 의존성 위험과 부작용이 있으므로 주의가 필요합니다.",
        ],
      },
      {
        id: 3,
        title: "압통",
        content: [
          "압통의 자연치료방법은 눌렀을 때 통증이 가장 심한 부위를 엄지손가락으로 지그시 10여 초간 눌렀다가 떼는 행동을 반복합니다. 가장 전통적인 치료법입니다. 온도 차를 이용한 팩, 온열 램프, 한랭 치료 등이 있습니다. 또한 기계적 자극을 이용한 초음파 치료, 저에너지 레이저 치료, 전기 치료 등이 있습니다. 그리고 이 통증은 보통 그 원인을 치료하여 가장 효과적으로 완화시킬 수 있습니다. 의사는 아세트아미노펜과 같은 진통제, 비스테로이드성 항염증제(NSAID) 또는 통증이 중증인 경우 아편유사제를 권장할 수 있습니다. 원인에 따라, 냉찜질 또는 온찜질, 관절 고정이 근골격 통증 완화에 도움이 될 수 있습니다.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "불면증",
    types: [
      {
        id: 1,
        title: "초기 불면증",
        content: [
          "초기 불면증의 증상 치료 약품으로는 크게 의사의 처방이 필요한 전문의약품과 약국에서 구입할 수 있는 일반의약품이 있습니다. 일반의약품은 항히스타민제인 독실아민이나 디펜하이드라민이 있습니다. 이러한 약물의 대표적인 부작용으로는 어지러움, 다음날 심한 졸음, 시야가 흐릿한 느낌, 몽롱한 정신, 잠을 잔 것 같지 않은 느낌, 목마름 등이 있을 수 있으며 내과적인 질환이 있거나 다른 약물을 복용하는 사람은 투약에 매우 주의하여야 합니다. 전문의약품으로는 졸피뎀(스틸녹스, 졸피람, 졸피신)과 같은 비-벤조디아제핀계 약물 또는 트리아졸람(할시온, 트리람 등) 이 대표적입니다. 이러한 약물은 GABA(가바, r-aminobutyric acid)라고 불리는 뇌 속의 수면유도 물질에 작용하여 수면을 돕습니다. 트리아졸람은 신체적인 의존성 및 심리적인 의존성을 일으킬 수 있습니다.",
        ],
      },
      {
        id: 2,
        title: "간헐적 불면증",
        content: [
          "간할적 불면증은 약물(약품) 치료가 있는데 수면 장애의 유형에 따라 약제를 선택합니다. 벤조다이아제핀 계열의 약제가 사용되며, 에스타졸람, 플루라제팜, 쿠아제팜, 테마제팜, 트리아졸람 등이 있습니다. 수면제는 한 달 이상 지속적으로 복용하지 않는 것이 원칙입니다. 비약물 치료로는 인지행동치료, 수면위생교육, 자극조절, 이완훈련, 빛 치료, 시간치료 등이 있습니다. 인지행동치료는 잘못된 수면습관, 믿음, 태도를 바꾸는 치료로 효과가 지속되는 안정적인 치료법입니다.",
        ],
      },
      {
        id: 3,
        title: "조기 기상",
        content: [
          "조기 기상은 수술 후 자세 변환부터 운동까지 가능한 기간에 최대한 빨리 움직이도록 하는 것을 말합니다. 조기 보행은 수술 후 환자의 심호흡을 도화 폐합병증을 예방하고 순환 기능을 촉진하여 회복을 돕는데 도움이 됩니다. 주요 치료 방법으로는 약물 치료, 인지행동치료(Cognitive Behavioral Therapy for Insomnia, CBT-I), 수면 위생 개선 등이 있으며, 이를 통해 수면 주기를 정상화하고, 불안과 우울감을 완화하며, 수면의 질을 개선할 수 있습니다.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "변비",
    types: [
      {
        id: 1,
        title: "배변감소",
        content: [
          "배변감소를 해결하기 위해서는 여러 가지 방법이 있습니다. 우선 식이섬유가 풍부한 음식을 섭취하는 것이 중요합니다. 식이섬유는 장의 활동을 촉진시켜 변이 원활하게 배출되도록 돕습니다. 섬유소가 많은 과일, 채소, 통곡물 등을 충분히 섭취하는 것이 도움이 됩니다.또한, 수분 섭취를 늘리는 것이 중요합니다. 충분한 물을 마시면 변이 부드럽게 되어 배출이 쉬워집니다. 물은 하루에 8잔 정도 마시는 것이 좋습니다. 규칙적인 운동도 중요한 치료 방법 중 하나입니다. 운동은 장의 운동을 활성화시켜 변비를 예방하는 데 효과적입니다. 간단한 걷기나 가벼운 운동만으로도 배변을 촉진할 수 있습니다. 배변이 어려운 경우, 완하제(laxatives)를 사용할 수 있습니다. 하지만 완하제는 장기간 사용을 피해야 하므로, 일시적인 방법으로만 사용하는 것이 좋습니다. 마지막으로, 스트레스 관리도 배변감소에 큰 영향을 미칩니다. 스트레스는 장의 기능을 방해할 수 있기 때문에, 명상이나 호흡 운동 등을 통해 스트레스를 줄이는 것이 도움이 될 수 있습니다. 이러한 방법들을 꾸준히 실천하면 배변감소를 개선하고, 장 건강을 유지하는 데 도움이 됩니다.",
        ],
      },
      {
        id: 2,
        title: "경변",
        content: [
          "경변은 변이 단단하고 배출이 어려운 상태로, 이를 해결하려면 식이섬유가 풍부한 음식과 충분한 수분 섭취가 중요합니다. 운동도 장의 움직임을 돕기 때문에 규칙적인 운동이 도움이 됩니다. 약물로는 완하제(laxatives)나 장운동 촉진제가 사용되며, 심리적 원인에 의한 경변은 스트레스 관리와 심리 치료로 개선될 수 있습니다. 생활 습관을 개선하고, 필요시 전문가와 상담하는 것이 치료의 핵심입니다. 또한 경변을 예방하기 위해서는 규칙적인 배변 습관을 유지하는 것도 중요합니다.",
        ],
      },
      {
        id: 3,
        title: "방광염",
        content: [
          "급성 방광염의 치료는 적절한 항생제의 사용입니다. 항균제의 투여 기간은 3일 요법이 표준이지만, 최근에는 1일 요법도 3일 요법과 동일한 효과가 있으며, 1회 복용만으로도 효과적으로 치료될 수 있다는 연구 결과도 있습니다. 만성 방광염의 경우는 장기간의 항생제 투여를 고려해야 하는데, 가장 중요한 것은 만성 방광염의 유발 요인을 찾아 이를 제거 혹은 교정해야 한다는 것입니다.",
        ],
      },
    ],
  },
];

const symptoms = [
  {
    id: 0,
    title: "두통",
    types: [
      {
        id: 1,
        title: "긴장두통",
        content: [
          "이마 근육, 턱 근육이나 머리와 목 근육이 단단해져 있는지 직접 만져보면 진단에 도움이 됩니다. 두통을 일으킬 수 있는 다른 원인의 감별을 위해 혈압, 시력검사, 두개골 X선 촬영 등을 할 수 있습니다. 필요하다면 CT나 MRI 검사를 합니다. 그 외 검사로는 일반 혈액검사, 갑상샘 검사를 주로 하고, 50세 이상에서는 혈액검사의 적혈구 침강속도(Erythrocyte Sedimentation Rate, ESR)도 혈관염에 의한 두통인지를 확인하는 데 도움이 됩니다.",
        ],
      },
      {
        id: 2,
        title: "편두통",
        content: [
          "편두통은 두통의 양상이 매우 특징적이어서 검사 없이 증상만으로도 충분히 진단할 수 있습니다. 편두통은 먼저 다른 원발두통과 구별해야 하고 뇌에 혈액 공급이 일시적으로 감소해서 나타나는 마비 증상인 일과성 허혈 발작과 같은 뇌혈관질환, 뇌종양, 감염 질환, 약물에 의한 이차두통, 뇌전증발작 증상은 아닌지 확인해야 합니다.",
        ],
      },
      {
        id: 3,
        title: "군발두통",
        content: [
          "편두통처럼 군발두통도 증상이 특징적이어서 이에 대한 자세한 문진으로 진단할 수 있습니다. 그러나 머리나 목의 근골격계 질환이나 편두통, 측두동맥염 등에 의한 통증인지를 감별이 필요합니다.",
        ],
      },
    ],
  },
  {
    id: 1,
    title: "기침",
    types: [
      {
        id: 1,
        title: "상기도감염(감기)",
        content: [
          "200여 가지 이상의 바이러스가 상기도감염을 일으킬 수 있으며, 라이노바이러스(rhinovirus), 코로나바이러스(coronavirus), 파라인플루엔자(parainfluenza) 바이러스, 호흡기세포융합바이러스(respiratory syncytial virus), 인플루엔자(influenza) 바이러스, 아데노바이러스(adenovirus), 엔테로바이러스(enterovirus) 등이 대표적입니다.",
          "감기에 걸린 후 2일 이내에 83%의 사람들에서 기침이 발생하며, 14일째에는 26%에서 여전히 기침을 하지만, 3주 정도 되면 대부분 없어집니다. 콧물, 코막힘, 후비루, 재채기, 인후 자극 등의 상기도증상과 발열이나 전신쇠약감, 근육통 같은 전신증상이 발생할 수 있습니다.",
          "감기로 인한 기침은 후비루나 상부호흡기의 기침 반사가 자극되어서 나옵니다. 감기는 바이러스에 의한 것으로, 저절로 좋아지는 경우가 대부분이므로 원인에 대한 특별한 치료는 필요 없고, 증상 완화를 위한 대증요법을 시행합니다.",
        ],
      },
      {
        id: 2,
        title: "급성기관지염",
        content: [
          "인플루엔자(Influenza) 바이러스, 파라인플루엔자(parainfluenza) 바이러스, 호흡기세포융합바이러스(respiratory syncytial virus), 아데노바이러스(adenovirus) 감염이 가장 흔하고, 2차적으로 세균성 감염이 10%미만에서 발생할 수 있습니다.",
          "또한, 찬공기, 먼지, 기도 자극물질, 유해가스 등 비감염성 원인도 있습니다. 흔히 상기도감염 후 기침이 발생하고, 진행하면서 객담(혹은 화농성 객담)이 동반되기도 합니다. 대부분 자연적으로 회복되나 기침과 객담이 2~3주간 지속될 수 있습니다.",
          "급성기관지염은 점막손상 및 염증성 매개인자 등이 복합적으로 관여하여 일시적인 기도폐쇄나 기관지 과민성을 유발할 수 있습니다. 급성기관지염은 임상적으로 진단하지만, 3주 이상 지속되는 경우에는 천식 등의 다른 질환을 고려해야 합니다.",
        ],
      },
      {
        id: 3,
        title: "감염 후 기침(post-infectious cough) ",
        content: [
          "감염 후 기침은 폐렴 등의 합병증 없이 급성 호흡기 감염 후에 기침 증상이 지속적으로 유발되는 경우를 총칭합니다. 감염 후 기침은 바이러스에 의한 상기도 감염 후에 가장 흔히 발생하며, 기도염증 및 이와 동반된 기도과민증, 객담분비 증가, 점액 섬모기능 장애, 코와 부비동의 염증에 의한 후비루, 심한 기침으로 인한 위식도역류 악화 등 다양한 병리기전에 의해 발생됩니다. ",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "피부발진",
    types: [
      {
        id: 1,
        title: "가려움발진",
        content: [
          "가려움 발진의 세부 증상은 원인에 따라 다를 수 있으며, 여러 종류의 피부 질환이나 알레르기 반응 등에서 발생할 수 있습니다. 특히 세 가지 정도로 나눌 수 있는데요. 알레르기 반응은 특정 음식이나 환경에 예민하게 반응할 때 생기는 것으로 피부가 살짝 붉어지고 가려움이 동반될 수 있습니다. 또 바이러스성 발진 감기나 다른 가벼운 바이러스로 인해 피부에 작은 발진이 생길 수 있습니다. 대부분 시간이 지나면 자연스럽게 좋아집니다. 그리고 접촉성 피부염 피부가 특정 물질과 만났을 때 나타나는 반응으로 피부염증이 생긴 부분이 따끔거리거나 가렵게 될 수 있습니다.",
        ],
      },
      {
        id: 2,
        title: "두드러기",
        content: [
          "이는 피부나 점막에 존재하는 혈관의 투과성이 증가되면서 일시적으로 혈장 성분이 조직 내에 축적되어 피부가 붉어지거나 흰색으로 부풀어 오르고 심한 가려움증이 동반되는 흔한 피부질환입니다. 두드러기는 또한 어떤 특정한 원인에 의해 피부 혈관의 투과성이 증가되어 혈액 속 혈장 성분이 일시적으로 피부 조직 안에 쌓여서 만들어지는 부분적인 부종인 팽진 과, 붉게 부어오르는 발적 이 나타나는 현상을 말합니다. 이런 현상은 주로 피부의 아래층인 진피 혈관 주위에서 일어납니다. 두드러기는 면역과 관련된 세포 중 하나인 비만 세포(Mast cell)와 호염기구(Basophil)에서 나온 히스타민(Histamine) 같이 염증을 일으키는 여러 물질에 의해 일어납니다. 두드러기는 비교적 흔한 질환으로 성인의 20% 정도가 평생 한번 이상 경험합니다. 또한 두드러기는 남성보다 여성에게 흔하게 발생하며, 주로 20~40대에 발생합니다. 두드러기는 대부분 1주에서 한 달 이내에 저절로 회복됩니다. 6주 이상 지속되는 만성 두드러기의 경우 전체 환자의 약 35%는 1년 이내에 증상이 없어졌고, 30%는 증상이 완화되었습니다.",
        ],
      },
      {
        id: 3,
        title: "피부묘기증",
        content: [
          "피부묘기증은 두드러기의 일종으로, 물리적인 원인에 의한 두드러기로 분류된다. 우리나라 인구의 약 5% 정도에서 나타나고, 대개 만성적인 경과를 보인다. 피부를 어느 정도 이상의 압력을 주어 긁거나 누르면, 그 부위에 국한되어 두드러기와 유사하게 가렵고 붉게 변하면서 부어 오른다. 그리하여 마치 피부에 글씨를 쓴 듯한 양상으로 보이게 된다. 경우에 따라서는 약한 자극에 의해서도 온몸의 피부 어느 곳에서나 발생할 수 있고, 가려워서 긁으면 더욱 심하게 두드러기 증상이 나타날 수 있다.",
          "피부묘기증은 또한 단순히 피부의 부종과 발적만 나타나는 단순피부묘기증(simple dermographism)과 발진 부위에 가려움을 동반하는 증상성 피부묘기증(symptomatic dermographism)으로 나눌 수 있다.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "미열",
    types: [
      {
        id: 1,
        title: "발열",
        content: [
          "미열은 정상 체온을 살짝 상회하는 체온을 말합니다. 갑작스럽게 몸을 많이 움직이거나 기온의 변화가 심한 때, 음식물을 섭취하고 소화되는 과정 등 일반적이고 일시적인 원인이 있는 반면 병적인 원인 역시 존재할 수 있습니다. 특히 세균, 바이러스에 대한 감염증은 물론 폐렴, 신우신염, 갑상선 질환, 호르몬의 변화, 체내 염증이 발생되거나 종양이 발생된 경우 등 매우 다양합니다. 그 중에 제일 잘 나오는 증상이 발열인데요. 이는 정상 체온을 살짝 상회하는 체온을 말합니다. 갑작스럽게 몸을 많이 움직이거나 기온의 변화가 심한 때, 음식물을 섭취하고 소화되는 과정 등 일반적이고 일시적인 원인이 있는 반면 병적인 원인 역시 존재할 수 있습니다. 특히 세균, 바이러스에 대한 감염증은 물론 폐렴, 신우신염, 갑상선 질환, 호르몬의 변화, 체내 염증이 발생되거나 종양이 발생된 경우 등 매우 다양합니다.",
        ],
      },
      {
        id: 2,
        title: "감기&몸살",
        content: [
          "감기 몸살은 감기 바이러스에 감염되었을 때 나타나는 몸살 증상을 일컫습니다. 전신 근육과 관절에 통증이 느껴지거나 몸이 무겁게 느껴지고 쉽게 피로감을 느끼게 됩니다. 발열, 오한, 두통 등의 증상이 동반될 수도 있습니다. 또한 감기는 코와 목 부분을 포함한 상부 호흡기계에 감염되어 나타나는 증상으로, 콧물, 재채기, 코 막힘, 기침, 인후통, 미열, 두통, 근육통 등이 나타납니다. 이 증상은 2~3일까지 최고로 심해진 후 1주 정도가 지나면 대부분 사라지며, 몸살은 감기 바이러스에 감염되었을 때 나타나는 증상으로, 전신 근육과 관절에 통증이 느껴지거나 몸이 무겁게 느껴지고 쉽게 피로감을 느끼게 됩니다. 비슷한 증상으로는 발열, 오한, 두통 등의 증상이 동반될 수도 있습니다.",
        ],
      },
      {
        id: 3,
        title: "오한",
        content: [
          "오한은 감염 등의 상태에서 인체가 근육 운동을 통해 신체 내부 심부 온도를 올리기 위한 생리적 반응으로 볼 수 있습니다. 감염과 염증성 열원(사이토카인과 프로스타글란딘)은 체온을 담당하는 뇌의 체온 중추에서 체온을 평소보다 높게 재설정합니다. 이에 따라 우리 몸은 추위를 느끼게 되고 이에 대한 생리적 반사 반응으로 근육을 수축시켜 체온을 새로 높아진 목표 체온까지 올리는데, 이것이 바로 오한입니다. 오한과 함께 피부에 소름이 돋는 듯한 느낌이 생기며 말초혈관이 수축합니다. 말초혈관 수축은 사지의 체온 저하와 창백을 일으킵니다. 오한으로 유발된 인체 내부 심부 체온의 상승은 감염원을 제거하기 위해서 인체 내 여러 면역세포를 감염 부위로 유도하는 효과가 있습니다. 또 심부 체온 상승은 이들 면역세포가 감염원을 효율적으로 제거하는 기전을 활성화합니다. 즉 오한은 인체가 세균 등의 감염원에 감염되었다는 것을 알려주는 경고 현상일 뿐만 아니라, 이들 감염원을 제거하기 위한 인체 방어 기전으로 볼 수 있습니다.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "근육통",
    types: [
      {
        id: 1,
        title: "섬유근육통",
        content: [
          "섬유근육통은 만성적으로 전신의 근골격계 통증, 뻣뻣함, 감각 이상, 수면 장애, 피로감을 일으키고, 신체 곳곳에 압통점(누르면 아픈 부분)이 나타나는 힘줄 및 인대 근막과 근육, 지방조직 등 연부조직의 통증 증후군입니다. 섬유근육통의 원인은 아직 밝혀지지 않았지만 통증에 대한 지각 이상 때문인 것으로 생각됩니다. 섬유근육통을 앓는 사람의 중추신경계에서 세로토닌의 대사가 감소되어 있고, 체내의 성장호르몬의 분비도 감소되어 있으며, 스트레스에 대한 부신피질호르몬의 분비 반응 감소, 뇌척수액에서 P 물질(substance P, 통증 유발 물질)의 증가, 자율신경계의 기능 부전 등의 이상이 있다는 것이 밝혀져 있습니다. 섬유근육통 환자들은 정상인들이 통증으로 느끼지 않는 자극을 통증으로 느끼게 되는데, 이것은 여러 가지 통증과 상관이 없는 자극에 대해서 몸이 적절히 처리하지 못하기 때문이라고 여겨집니다. 또한 여러 가지 정신적인 이상-우울증, 불안, 건강 염려증 등이 동반되어 나타나는데, 섬유근육통 환자의 약 30%가 정신과적인 질환 증상을 보일 수 있습니다. 근육이나 인대, 힘줄 등에서 객관적인 이상은 발견되지 않습니다.",
        ],
      },
      {
        id: 2,
        title: "근골격계 통증",
        content: [
          "근골격 통증은 뼈, 관절, 근육, 힘줄, 인대, 윤활낭 질환 또는 이들의 조합으로 인해 발생할 수 있습니다. 손상은 통증의 가장 일반적인 원인입니다. 이 요인들을 결정하는 것은 어떠한 질환이 통증을 야기할 가능성이 높은지에 대한 중요한 단서를 제공합니다. 의사들은 이 요인들의 결정을 돕고 통증의 원인을 결정하는 데 도움이 될 수 있는 다른 중요한 소견들을 찾아내기 위해 신체 검사를 실시합니다.",

          "때때로 통증 유형은 통증이 시작된 부위를 암시합니다. 예를 들어, 운동 시 악화되는 통증은 근골격 질환을 암시합니다. 근육 연축 시 통증은 통증이 근육 질환(때때로 만성 척수 손상)으로 인해 발생함을 암시합니다. 부기 부위 또는 의사들이 부위(예: 관절, 인대 또는 윤활낭)를 만져보거나(촉진하거나) 관절을 수동으로 움직일 때의 압통 부위가 종종 통증의 출처를 나타낼 수 있습니다.",
        ],
      },
      {
        id: 3,
        title: "압통",
        content: [
          "근육통은 손가락으로 눌렀을 때 통증을 느끼는 상태입니다. 근육통이 심해지면, 해당 부위에 압통이 나타날 수 있습니다. 국소적 압통(Localize Tenderness)은 통증이 특정 부위에 한정되어 나타나는 것으로, 예를 들어 어깨, 무릎, 목 등에서 압박을 가할 때 강한 통증을 느낄 수 있습니다. 심한 통증(Severe Pain)의 경우, 압통이 발생할 때 통증이 매우 심할 수 있습니다. 이는 염증, 근육 손상, 관절염 등에서 흔히 발생합니다. 또한 압통은 의학에서 압통(tenderness, 壓痛) 또는 누름통증은 특정 부위를 만졌을 때 느껴지는 통증이나 불편감이라고 정의되며, 만지지 않았을 때의 통증과 혼동해서는 안됩니다. 통증은 환자의 주관적인 증상이지만 압통은 의사가 객관적으로 밝힐 수 있는 징후입니다.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "불면증",
    types: [
      {
        id: 1,
        title: "초기 불면증",
        content: [
          "불면증은 보통 잠이 오지 않는 것이라 생각하지만, 지나치게 일찍 잠에서 깨는 것, 자다가 깨거나 깬 이후 더 이상 잠이 들지 않는 것, 야간 수면 시간이 부족한 것, 잠은 잤지만 개운하지 않고 피로감이 느껴지는 것 등이 모두 불면증의 증상입니다. 그러다가 오는 게 초기 불면증입니다. 이 증상은 어렵게 잠에 들더라도 쉽게 깨는 현상을 겪게 됩니다. 오랜 시간 동안 수면을 유지하는 것이 힘듭니다. 평일에 부족했던 수면을 주말에 몰아 자게 되는 경우가 종종 있는데요. 이와 같은 증세 또한 불면증 때문일 수 있습니다. 자고 일어났을 때 머리가 무겁고 개운한 느낌을 받기 어렵습니다. 집중력이 떨어져 일상생활이 힘들어집니다. 불면증 초기증상은 누구나 경험할 수 있는 수준으로 간단합니다. 잠을 자려고 누웠지만 30분 이상으로 입면시간이 길어지는 것입니다. 이것이 3개월 이상 반복된다면 불면증으로 진단됩니다. 잠이 부족해 식욕 부진 또는 과잉 섭식장애가 생기고, 두통과 소화불량 증상이 동반되기도 합니다. 신경이 이전보다 과민해져 사소한 일에도 쉽게 짜증이 나기도 합니다. 잠을 자다가 예상 시간보다 일찍 깨 다시 잠들기 힘든 증상, 새벽에 자꾸 깨는 것을 반복하는 것도 불면증 초기증상 중 하나입니다.",
        ],
      },
      {
        id: 2,
        title: "간헐적 불면증",
        content: [
          "간헐적 불면증(Intermittent Insomnia)은 일정한 주기로 발생하는 불면증으로, 주기적으로 수면에 어려움을 겪는 증상을 특징으로 합니다. 이 증상은 종종 몇 주 또는 몇 달에 걸쳐 나타나며, 수면 시작, 중간에 깨는 문제, 또는 이른 아침 기상 등의 다양한 형태로 나타날 수 있습니다. 이는 또 신체적 증상도 동반할 수 있습니다. 수면 부족으로 인한 피로와 스트레스가 쌓이면 두통, 근육 긴장, 소화 불량 등이 발생할 수 있습니다. 장기적으로는 면역력 저하나 심혈관계 질환 등의 위험도 증가할 수 있습니다.",
        ],
      },
      {
        id: 3,
        title: "조기 기상",
        content: [
          "조기 기상 즉, Early Morning Awakening은 주로 불면증의 한 유형으로, 사람들이 예상보다 훨씬 일찍 깨어나는 증상입니다. 이는 수면의 질이나 수면 시간에 영향을 미치며, 수면 주기에서 중요한 수면 단계들이 제대로 이루어지지 않거나 부족할 수 있습니다. 주로 정신적 스트레스, 우울증, 불안 장애 등과 관련이 있으며, 이로 인해 사람들은 새벽에 일찍 깨어나고 다시 잠들지 못하는 상황이 발생합니다.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "변비",
    types: [
      {
        id: 1,
        title: "배변감소",
        content: [
          "'배변감소'는 배변 횟수가 줄어드는 현상을 말합니다. 보통 하루에 한 번 정도 배변하는 것이 정상인데, 변비가 있으면 배변 횟수가 일주일에 3번 이하로 줄어들 수 있습니다. 이는 장이 음식을 처리하는 속도가 너무 느려지거나, 변이 제대로 배출되지 않아서 발생합니다. 또한 이 증상은 최소 진단 6개월 전부터 시작되고 지난 3개월 동안 존재해야 합니다. 또한 복통이나 더부룩함(bloating)이 있더라도 주 증상이 아니어야 하며, 과민장증후군 진단에 부합하지 않아야 합니다. 변비는 전 인구의 5~20%가 증상을 호소할 만큼 매우 흔한 증상이며, 연령이 증가할수록 그 빈도가 증가하고 남자보다는 여자에게 흔하게 발생합니다.",
        ],
      },
      {
        id: 2,
        title: "경변",
        content: [
          "경변 (Hard, Dry Stools) 은 변이 딱딱하고 건조한 상태를 말합니다. 장에 변이 오랫동안 머물게 되면, 장에서 수분을 흡수하게 되어 변이 점점 단단해지고, 그로 인해 배출이 어려워집니다. 이로 인해 배변 시 변이 잘 나오지 않아 힘이 들고, 통증이나 불편함을 느낄 수 있습니다. 특히 딱딱한 변이 배출되면서 항문 주변에 자극을 주거나 상처를 낼 수도 있어, 배변 후 불쾌한 느낌이 오래 지속될 수 있습니다.",
        ],
      },
      {
        id: 3,
        title: "방광염",
        content: [
          "방광은 소변을 저장하고 배출하는 장기이므로, 방광염의 증상은 주로 소변과 관계가 있습니다. 소변을 볼 때 아프고(배뇨통), 소변을 자주 보고(빈뇨), 갑자기 소변이 마려울(급박뇨) 수 있습니다. 소변을 봐도 개운치 않고, 소변이 남아 있는 느낌(잔뇨감)이 듭니다. 방광이 위치한 아랫배도 아플 수 있습니다. 심할 경우에는 소변에 피가 섞여 나올 수도 있습니다(혈뇨). 급성 단순 방광염 증상은 모두 갑자기 나타나고, 일상 생활에 지장을 줍니다. 하지만 방광염 자체는 전신 증상을 나타내지 않습니다. 방광염 증상에 발열, 오한 같은 전신 증상과 옆구리 통증이 동반된다면 급성 신우신염을 의심해야 합니다. 이는 대부분 세균 감염에 의해 발생하며, 요로 감염이라고도 알려져 있습니다. 적절한 항생제 치료를 하면 쉽게 치유되며, 뚜렷한 후유증을 남기는 경우는 거의 없습니다. 90%의 환자는 항생제 치료 시작 후 72시간 내에 증상이 사라집니다.",
        ],
      },
    ],
  },
];

const summary = [
  {
    id: 0,
    title: "두통",
    content: [
      "두통은 전체 인구의 70~80%가 경험하는 매우 흔한 증상입니다. 두통이 생기면 많은 사람들이 혹시 뇌에 문제가 생긴 게 아닐까 염려하기도 하지만, 실제로 심각한 질병이 원인인 경우는 드뭅니다.",
      "국내 한 연구에 의하면 남자는 63%, 여자는 73%가 최근 1년간 두통을 경험한 적이 있다고 하였습니다. 미국도 성인 인구의 약 40%가 일상적으로 두통을 경험한다고 하고, 남자는 91%, 여자는 95%가 두통을 경험한 적이 있다고 합니다. 이처럼 두통은 일상생활 속에서 경험하는 가장 흔한 증상 중의 하나입니다.",
    ],
  },
  {
    id: 1,
    title: "기침",
    content: [
      "기침은 원인이 다양하기 때문에 원인 진단을 위해서는 기침의 지속기간에 따른 분류가 중요합니다. 급성 기침은 3주 미만, 아급성 기침은 3~8주, 만성 기침은 8주 이상 지속되는 기침으로 정의합니다.",
      "급성 기침은 3주 미만의 기침으로, 상기도감염 및 급성기관지염이 가장 흔한 원인입니다.",
      "아급성 기침은 3주 이상 8주 미만 지속되는 기침으로, 감염 후 기침이 가장 흔한 원인이며 감염 후 기관지과민성이 지속되어 발생합니다.",
      "만성 기침은 8주 이상 지속되는 기침으로, 상기도기침증후군, 기침형 천식, 위식도역류질환이 가장 흔한 원인이지만 만성 기침의 원인을 찾을 수 없는 경우도 많습니다.",
      "여기에서는 급성 기침과 아급성 기침에 대해서만 설명하고 있습니다.",
    ],
  },
  {
    id: 2,
    title: "피부발진",
    content: [
      "알레르기 반응 후에 주로 나타나며, 대부분 가렵습니다. 하지만 통증이 동반되거나 증상이 없는 발진도 있습니다.",

      "피부색이 변하는 경우, 붉어지거나 하는 등, 피부의 질감이 변하는 경우, 돌기나 부기가 생기는 등, 가려움증이 동반되는 경우, 따뜻해지는 경우, 울퉁불퉁해지는 경우 등이 있다.",

      "또한 건조해지는 경우, 갈라지거나 물집이 생기는 경우, 부풀어 오르는 경우, 아픈 경우들이 대표적인 증상입니다.",
    ],
  },
  {
    id: 3,
    title: "미열",
    content: [
      "발열의 기준 가운데 하나의 증상이며, 체온 증가는 물론, 땀, 오한, 불쾌감, 근육통, 발진, 불면증, 두통, 체력저하, 식욕저하 등의 증세가 나타납니다.",

      "열을 낮추는 방법으로는 다음과 같은 것들이 있습니다. 해열제 복용, 물로 닦거나 옷을 벗기지 않거나, 발열 증상 완화에 좋은 마사지, 파를 넣어 끓인 된장국, 15~20분 정도 족욕하기 등이 있습니다.",

      "체온이 38.0°C 이상의 발열이 있을 때는 의료기관을 방문하여 진찰을 받는 것이 좋습니다.",
    ],
  },
  {
    id: 4,
    title: "근육통",
    content: [
      "근육통은 스트레스로 인해 발생할 수 있으며, 극심한 스트레스로 인해 근육통을 겪는 경우 피로감과 수면장애, 복통, 복부 팽만감 등의 증상이 나타날 수 있습니다.",

      "또한 이는 근육의 구조나 기능에 문제가 있을 때 발생합니다. 운동 후 근육통은 염증반응으로 인해 발생하며, 근육세포가 단백질을 만들어 손상된 부위를 메우면서 근육이 비대해집니다.",
    ],
  },
  {
    id: 5,
    title: "불면증",
    content: [
      "불면증은 보통 잠이 오지 않는 것이라 생각하지만, 지나치게 일찍 잠에서 깨는 것, 자다가 깨거나 깬 이후 더 이상 잠이 들지 않는 것, 야간 수면 시간이 부족한 것, 잠은 잤지만 개운하지 않고 피로감이 느껴지는 것 등이 모두 불면증의 증상입니다. 잠을 잘 수 있는 적절한 환경이 조성되어 있는데도 이러한 증상들이 일주일에 3번 이상 나타나면 불면증을 의심해 볼 수 있습니다.",

      "또한 불면증은 쉽게 잠을 들지 못하거나, 잠이 들어도 자주 깨거나, 이른 새벽에 잠을 깨어 다시 잠을 이루지 못하는 등 다양한 양상으로 나타날 수 있습니다. 불면증이 지속되면 정신적, 신체적 질환에 취약할 수 있습니다.",

      "동물 실험에서 잠을 못 자도록 수면을 박탈하면 쇠약한 모습, 음식 섭취의 이상, 체중 감소, 체온 저하, 피부 장애, 심한 경우 인류에게 안 좋을 수 있다는 연구 보고가 있습니다.",
    ],
  },
  {
    id: 6,
    title: "변비",
    content: [
      "변비는 대장의 연동 운동이 저하되어 원활한 배변 운동을 하지 못하는 질환을 의미합니다. 배변이 1주일에 2회 미만이거나, 배변 시에 굳은 변이 나오거나, 출혈이 동반되는 경우를 변비로 진단합니다.",

      "어린이는 보통 성장하면서 장의 운동이 변화합니다. 3~4세 정도가 되어야 성인처럼 1~2일에 1~2회 정도의 배변을 할 수 있습니다.",

      "1세 미만의 영아는 연령에 따른 생리적 특성과 분유, 이유식, 모유 섭취에 따라 하루에 0~9회 정도의 다양한 배변 습관을 보입니다. 하루에 1회 이상 대변을 봐야 하지만, 2~3일에 1회 보더라도 대변이 굳지 않고 편하게 대변을 본다면, 변비로 진단하지 않습니다.",
    ],
  },
];

const medicines = [
  {
    id: 0,
    title: "긴장두통",
    types: [
      {
        id: 0,
        name: "바이엘아스피린정500밀리그람",
        mediid: 1427,
      },
      {
        id: 1,
        name: "타이레놀정500밀리그람(아세트아미노펜)",
        mediid: 34,
      },
      {
        id: 2,
        name: "부루펜정200밀리그램(이부프로펜)",
        mediid: 1632,
      },
    ],
  },
  {
    id: 1,
    title: "편두통",
    types: [
      {
        id: 0,
        name: "타이레놀정500밀리그람(아세트아미노펜)",
        mediid: 34,
      },
      {
        id: 1,
        name: "나리센연질캡슐(나프록센)",
        mediid: 220,
      },
      {
        id: 2,
        name: "부루펜정200밀리그램(이부프로펜)",
        mediid: 1632,
      },
    ],
  },
  {
    id: 2,
    title: "군발두통",
    types: [
      {
        id: 0,
        name: "부루펜정200밀리그램(이부프로펜)",
        mediid: 1632,
      },
      {
        id: 1,
        name: "나리센연질캡슐(나프록센)",
        mediid: 220,
      },
      {
        id: 2,
        name: "사리돈에이정",
        mediid: 1819,
      },
    ],
  },
  {
    id: 3,
    title: "상기도감염(감기)",
    types: [
      {
        id: 0,
        name: "부루펜정200밀리그램(이부프로펜)",
        mediid: 1632,
      },
      {
        id: 1,
        name: "나리센연질캡슐(나프록센)",
        mediid: 220,
      },
      {
        id: 2,
        name: "애드빌리퀴겔연질캡슐(이부프로펜)",
        mediid: 2615,
      },
    ],
  },
  {
    id: 4,
    title: "급성기관지염",
    types: [
      {
        id: 0,
        name: "부루펜정200밀리그램(이부프로펜)",
        mediid: 1632,
      },
      {
        id: 1,
        name: "사리돈에이정",
        mediid: 1819,
      },
      {
        id: 2,
        name: "판피린큐액",
        mediid: 39,
      },
    ],
  },
  {
    id: 5,
    title: "감염 후 기침(post-infectious cough)",
    types: [
      {
        id: 0,
        name: "부루펜정200밀리그램(이부프로펜)",
        mediid: 1632,
      },
      {
        id: 1,
        name: "스트렙실(플루르비프로펜)",
        mediid: 2057,
      },
      {
        id: 2,
        name: "하벤코프에스액",
        mediid: 4474,
      },
    ],
  },
  {
    id: 6,
    title: "가려움발진",
    types: [
      {
        id: 0,
        name: "클라리틴정(로라타딘)",
        mediid: 3835,
      },
      {
        id: 1,
        name: "알레그라정120밀리그람(펙소페나딘염산염)",
        mediid: 2499,
      },
      {
        id: 2,
        name: "페니라민정(클로르페니라민말레산염)",
        mediid: 41,
      },
    ],
  },
  {
    id: 7,
    title: "두드러기",
    types: [
      {
        id: 0,
        name: "지르텍정(세티리진염산염)",
        mediid: 24,
      },
      {
        id: 1,
        name: "페니라민정(클로르페니라민말레산염)",
        mediid: 41,
      },
      {
        id: 2,
        name: "멘소래담에이디크림",
        mediid: 1191,
      },
    ],
  },
  {
    id: 8,
    title: "피부묘기증",
    types: [
      {
        id: 0,
        name: "지르텍정(세티리진염산염)",
        mediid: 24,
      },
      {
        id: 1,
        name: "알레그라정120밀리그람(펙소페나딘염산염)",
        mediid: 2499,
      },
      {
        id: 2,
        name: "클라리틴정(로라타딘)",
        mediid: 3835,
      },
    ],
  },
  {
    id: 9,
    title: "발열",
    types: [
      {
        id: 0,
        name: "부루펜정200밀리그램(이부프로펜)",
        mediid: 1632,
      },
      {
        id: 1,
        name: "타이레놀정500밀리그람(아세트아미노펜)",
        mediid: 34,
      },
      {
        id: 2,
        name: "나리센연질캡슐(나프록센)",
        mediid: 220,
      },
    ],
  },
  {
    id: 10,
    title: "감기&몸살",
    types: [
      {
        id: 0,
        name: "부루펜정200밀리그램(이부프로펜)",
        mediid: 1632,
      },
      {
        id: 1,
        name: "타이레놀정500밀리그람(아세트아미노펜)",
        mediid: 34,
      },
      {
        id: 2,
        name: "게보린소프트연질캡슐",
        mediid: 82,
      },
    ],
  },
  {
    id: 11,
    title: "오한",
    types: [
      {
        id: 0,
        name: "게보린소프트연질캡슐",
        mediid: 82,
      },
      {
        id: 1,
        name: "타이레놀정500밀리그람(아세트아미노펜)",
        mediid: 34,
      },
      {
        id: 2,
        name: "경남비타민씨정",
        mediid: 93,
      },
    ],
  },
  {
    id: 12,
    title: "섬유근육통",
    types: [
      {
        id: 0,
        name: "아론정(독시라민숙신산염)",
        mediid: 2303,
      },
      {
        id: 1,
        name: "쿨드림연질캡슐(디펜히드라민염산염)",
        mediid: 3771,
      },
      {
        id: 2,
        name: "펜다나정",
        mediid: 4284,
      },
    ],
  },
  {
    id: 13,
    title: "근골격계 통증",
    types: [
      {
        id: 0,
        name: "나리센연질캡슐(나프록센)",
        mediid: 220,
      },
      {
        id: 1,
        name: "탁센400이부프로펜연질캡슐",
        mediid: 3922,
      },
      {
        id: 2,
        name: "미니온플라스타",
        mediid: 1355,
      },
    ],
  },
  {
    id: 14,
    title: "압통",
    types: [
      {
        id: 0,
        name: "탁센400이부프로펜연질캡슐",
        mediid: 3922,
      },
      {
        id: 1,
        name: "신신파스아렉스",
        mediid: 14,
      },
      {
        id: 2,
        name: "타이레놀정500밀리그람(아세트아미노펜)",
        mediid: 34,
      },
    ],
  },
  {
    id: 15,
    title: "초기 불면증",
    types: [
      {
        id: 0,
        name: "아졸정(독시라민석시네이트)",
        mediid: 2417,
      },
      {
        id: 1,
        name: "슬리펠정25밀리그램(디펜히드라민염산염)",
        mediid: 2080,
      },
      {
        id: 2,
        name: "제로민연질캡슐(디펜히드라민염산염)",
        mediid: 3314,
      },
    ],
  },
  {
    id: 16,
    title: "간헐적 불면증",
    types: [
      {
        id: 0,
        name: "아졸정(독시라민석시네이트)",
        mediid: 2417,
      },
      {
        id: 1,
        name: "슬리펠정25밀리그램(디펜히드라민염산염)",
        mediid: 2080,
      },
      {
        id: 2,
        name: "제로민연질캡슐(디펜히드라민염산염)",
        mediid: 3314,
      },
    ],
  },
  {
    id: 17,
    title: "조기 기상",
    types: [
      {
        id: 0,
        name: "벤포벨브이정",
        mediid: 1559,
      },
      {
        id: 1,
        name: "슬리펠정25밀리그램(디펜히드라민염산염)",
        mediid: 2080,
      },
      {
        id: 2,
        name: "제로민연질캡슐(디펜히드라민염산염)",
        mediid: 3314,
      },
    ],
  },
  {
    id: 18,
    title: "배변감소",
    types: [
      {
        id: 0,
        name: "돌체락원스산",
        mediid: 552,
      },
      {
        id: 1,
        name: "마이락스산(폴리에틸렌글리콜3350)",
        mediid: 1037,
      },
      {
        id: 2,
        name: "듀락칸이지시럽(락툴로오즈농축액)",
        mediid: 584,
      },
    ],
  },
  {
    id: 19,
    title: "경변",
    types: [
      {
        id: 0,
        name: "위드원엘과립",
        mediid: 3020,
      },
      {
        id: 1,
        name: "마이락스산(폴리에틸렌글리콜3350)",
        mediid: 1037,
      },
      {
        id: 2,
        name: "돌체락원스산",
        mediid: 552,
      },
    ],
  },
  {
    id: 20,
    title: "방광염",
    types: [
      {
        id: 0,
        name: "애드빌리퀴겔연질캡슐(이부프로펜)",
        mediid: 2615,
      },
      {
        id: 1,
        name: "인플라정",
        mediid: 3214,
      },
      {
        id: 2,
        name: "돌체락원스산",
        mediid: 552,
      },
    ],
  },
];

export { symptoms, medicines, disease, summary };