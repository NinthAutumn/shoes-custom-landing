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
    <button class="read-more">詳細</button>
  </div>
</template>

<style >
.story-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
  padding-top: 4rem;
  box-sizing: border-box;
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
