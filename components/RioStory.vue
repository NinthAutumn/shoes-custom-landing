<template>
  <div class="rio-story">
    <div class="story-container">
      <div class="story story-one">
        <p><strong>『全ての人生において、主役は必ず自分自身』</strong></p>
        <p>
          自分というストーリーを生きる。 これは私達が大切にしている 理念です。
        </p>
        <p>
          こだわりを大切に、 自分という物語を形にする。
          そんな瞬間を一緒に作りたい。
        </p>
        <p>
          その想いから全てが始まりました。 オーダーメイドの一般化を掲げ、
          私たちはオーダースーツブランドを展開しており、 その一般化を目指して
          全国45展開をしています。 オフィスもなかった創業当初から
          皆様に支えていただき続けて本場ヨーロッパでの研修や勉強を重ね、メディア出演や勲章の授章を経て、数々の実績を収めてまいりました。
        </p>
      </div>
      <div class="story story-two">
        <p>
          オーダーメイドは、特別な人がするもので、なにかと高級なイメージがある。
          このイメージは、オーダースーツにおいては払拭されつつあり
          現代では、既製品のスーツと変わらぬ値段で、その人の理想をカスタマイズするオーダースーツが
          多くの人の手に届くような時代になりました。 では、オーダーシューズは
          なぜ広まらないのか。 >
        </p>
        <p>
          実際にお客様からも要望が多く 顧客向けに行うアンケートでも
          オーダーシューズのリリースを 求める声が多くありました。
          その中でも多かったのは
          ・ヨーロッパのシューズはデザインが良いが日本人の足に合わず履きにくい。
          ・足のサイズが大きく、 既製品ではサイズがない。
          サイズがあるかどうかで革靴を選んでいた。
          ・ハイブランド製品は価格が高く、手作りのフルオーダーでは品質は確かだが、価格も高い上に納期が長い。
        </p>
        <!-- <p>
          こうした意見を踏まえて
          <strong>
            『日本にラグジュアリーオーダーシューズブランドを誕生させる』
          </strong>

          そう決めました。
        </p> -->
      </div>
    </div>
    <div class="story-modal" :class="{ visible: modal }">
      <div class="blur"></div>
      <div class="story-modal__container">
        <h3 style="padding-left: 0.5rem">
          <span style="color: var(--secondary-color); font-style: italic"
            >Rio's </span
          >Story
        </h3>
        <div @click="modal = false" class="close">close</div>
        <hr style="border-color: var(--secondary-color); margin-bottom: 1rem" />
        <div class="story-modal__content">
          <p><strong>『全ての人生において、主役は必ず自分自身』</strong></p>
          <p>
            自分というストーリーを生きる。 これは私達が大切にしている 理念です。
          </p>
          <p>
            こだわりを大切に、 自分という物語を形にする。
            そんな瞬間を一緒に作りたい。
          </p>
          <p>
            その想いから全てが始まりました。 オーダーメイドの一般化を掲げ、
            私たちはオーダースーツブランドを展開しており、 その一般化を目指して
            全国45展開をしています。 オフィスもなかった創業当初から
            皆様に支えていただき続けて本場ヨーロッパでの研修や勉強を重ね、メディア出演や勲章の授章を経て、数々の実績を収めてまいりました。
          </p>
          <p>
            オーダーメイドは、特別な人がするもので、なにかと高級なイメージがある。
            このイメージは、オーダースーツにおいては払拭されつつあり
            現代では、既製品のスーツと変わらぬ値段で、その人の理想をカスタマイズするオーダースーツが
            多くの人の手に届くような時代になりました。 では、オーダーシューズは
            なぜ広まらないのか。 >
          </p>
          <p>
            実際にお客様からも要望が多く 顧客向けに行うアンケートでも
            オーダーシューズのリリースを 求める声が多くありました。
            その中でも多かったのは
          </p>
          <ul>
            <li>
              ヨーロッパのシューズはデザインが良いが日本人の足に合わず履きにくい。
            </li>
            <li>足のサイズが大きく、 既製品ではサイズがない。</li>
            <li>サイズがあるかどうかで革靴を選んでいた。</li>
            <li>
              ハイブランド製品は価格が高く、手作りのフルオーダーでは品質は確かだが、価格も高い上に納期が長い。
            </li>
          </ul>
          <p>
            こうした意見を踏まえて
            <strong
              >『日本にラグジュアリーオーダーシューズブランドを誕生させる』
            </strong>
            そう決めました。
          </p>
          <p>
            それも、既製品と変わらぬ低価格で多くの人に喜んで貰える商品をつくること。
          </p>
          <p>
            欧州デザインを日本人の足に合わせ、大きなサイズにも対応する。レザーや染色にもこだわりながら最高峰品質を目指して低価格で。
          </p>
          <p>こんな無謀に思える挑戦を決めました。</p>
          <p>
            オーダースーツで本場から途上国まで、各地で思考、技術、生地
            それらを学び、独自のスタイルを確立した私は、靴でも同様に世界各国へ勉強に行き、各地で靴を買ってみるところから始めました。
          </p>
          <p>
            日本でも数々の企業や工場を周り、本当に納得のいく商品を実現させるには、5年を超える歳月がかかりました。
          </p>
          <p>
            本当はもっと早くリリースをしたかった気持ちですが、品質や個性を体現する、というこだわりだけは譲れませんでした。
          </p>
          <p>そんな昨年に新型コロナウイルスの感染拡大が起きました。</p>
          <p>
            各業界に大ダメージが発生。当然、靴業界にも大打撃となり素材卸、職人、メーカー、小売たくさんの人が苦しんでいる現状でした。
          </p>
          <p>
            この業界を救うためにも。その一心で追い求めた進めた開発は、1人の男性との出会いで大きく変わりました
          </p>
          <p>
            私達と同じ5年以上の歳月をかけて世界を代表するブランドの革靴の研究に没頭し、世界最高峰の靴を追求してきたパートナーと出会い今日に至るまで、全身全霊をかけて準備をして参りました。
          </p>
          <p>
            これまで何度も何度も試作を重ね、やっと出来上がった作品はアスリートや経営者を対象として顧客向けに行ったプレリリースにて、プロアスリートや本場のデザイナーからも絶賛をいただきました。
          </p>
          <p>
            また、価格を抑えるためにも思考を張り巡らせ、あらゆる手段を考えた上でやっとの思いで最善策を実行に成功。世界レベルの染色技術と欧州産高級レザーの使用を妥協する事なく、実現致しました。
          </p>
          <p>
            そうして出来上がったブランドはフランス奨励勲章
            授章やプレスリリースでの絶賛世界最高峰の技術とこだわりを引き下げ世界が認めた日本初のラグジュアリーオーダーシューズブランド
            <span style="color: #b8ab78; font-weight: bold; font-style: italic"
              >『Rio』 </span
            >として待望のデビューを果たします。
          </p>
          <p>
            光栄にも注目度は高く、グランドオープン前ながらコレクションやメディアへの出演更には全国10店舗の展開が既に計画されています。
          </p>
          <p>業界を照らすブランドへ。</p>
          <p>日本を代表するブランドへ。</p>
          <p>オーダーシューズが一般化する未来へ。</p>
          <p>
            <span style="color: #b8ab78; font-weight: bold; font-style: italic"
              >『Rio』</span
            >が常識を覆します。あなた史上、最高のデザイナーはあなた自身。自分というストーリーを表現する。世界に一足の感動をあなたへ。
          </p>
          <p>最後に。</p>
          <p>
            ある東南アジアの国へ 出張へ行った際。
            その国では多くの子供達が靴を履いていませんでした。
          </p>
          <p>
            いつかこのシューズブランドが今、靴を知らない子供達にも履いてもらえるように。
          </p>
          <p>
            私たちは皆様からのいただいた売上の一部を通して国内外の各施設へ運動靴をお届けします。
          </p>
          <p><strong>【あなたの一足が、子供達の夢に】</strong></p>
          <p>
            ※弊社では創業以来、諸外国や国内行政への寄付活動を通して
            社会への還元と貢献をテーマに活動を行なっております。
          </p>
        </div>
      </div>
    </div>
    <button class="read-more" @click="modal = !modal">続きを読む</button>
  </div>
</template>
<script>
export default {
  data: () => ({
    modal: false,
  }),
}
</script>
<style >
.story-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
  padding-top: 4rem;
  box-sizing: border-box;
}
.visible {
  display: block;
  visibility: visible !important;
}
.story-modal {
  display: none;
  visibility: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  left: 0;
  top: 0;
  justify-content: center;
  z-index: 100;
  overscroll-behavior: contain;
  overflow: hidden;
}
.story-modal__container {
  padding: 4rem;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 1);
  background: var(--primary-color);
  z-index: 1;
  overscroll-behavior: contain;
  overflow: hidden;
  position: relative;
}
.story-modal .close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: rgb(163, 163, 163);
  font-size: 2.5rem;
  cursor: pointer;
  user-select: none;
}
.story-modal .blur {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
  background: rgba(255, 255, 255, 0.233);
  filter: blur(40px);
  content: '';
}
.story-modal__content {
  /* max-height: 50rem; */

  overflow: auto;
  overscroll-behavior: contain;
}
@media screen and (max-width: 750px) {
  .story-modal__content {
    max-height: 90vh;
  }
  .story-modal__container {
    width: 100%;
    height: 100vh;
    /* overflow: auto; */
  }
}
@media screen and (min-width: 750px) {
  .story-modal__content {
    max-height: 50rem;
  }
  .story-modal__container {
    width: 60rem;
    height: 60rem;
    margin-top: 5rem;
    /* overflow: auto; */
  }
}
.story-modal p {
  margin-bottom: 1rem;
  font-size: 2rem;
}

.story-modal li {
  margin-bottom: 1rem;
  font-size: 2rem;
}

@media screen and (max-width: 750px) {
  .story-two {
    display: none !important;
  }
  .story-container {
    grid-template-columns: 1fr;
    padding-right: 0rem;
  }
}

.rio-story {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.read-more {
  align-self: flex-end;
}
.story p {
  margin-bottom: 2rem;
  line-height: 3rem;
}
.story {
  padding: 1rem;
  box-sizing: border-box;
  font-size: 2rem;
}
</style>
