import React from "react";
import "./UzbekistanGuide.css";

const SectionCard = ({ icon, title, children }) => (
  <div className="section-card">
    <div className="section-header">
      <span className="section-icon" role="img" aria-label="icon">{icon}</span>
      <h2>{title}</h2>
    </div>
    <div className="section-content">{children}</div>
  </div>
);


export default function UzbekistanTravelGuide() {
  return (
    <div className="guide-container">
       

   
      <h1 className="guide-title">
        O'zbekistonga Sayohat: Madaniyat va Odob Qo'llanmasi
      </h1>

      <SectionCard icon="🌍" title="Umumiy Ma'lumot">
        <p>O‘zbekiston – qadimiy tarix, boy madaniyat va mehmondo‘st xalq yurti. Sayohatingiz davomida siz mahalliy odatlar va madaniyatga hurmat bilan yondashsangiz, mehmon sifatida doimo iliq kutib olinishingiz kafolatlangan.</p>
      </SectionCard>

      <SectionCard icon="👕" title="Kiyinish Madaniyati">
        <details>
          <summary>Umumiy Tavsiyalar</summary>
          <p>Erkaklar va ayollar uchun yopiq kiyimlar tavsiya etiladi. Issiq iqlimda yengil, ammo tanani yopuvchi kiyimlar qulay va madaniy jihatdan maqbul.</p>
        </details>
        <details>
          <summary>Ayollar uchun</summary>
          <p>Ro‘mol yopish ziyoratgohlarda hurmat ifodasi sanaladi. Juda qisqa yoki shaffof kiyimlardan saqlaning.</p>
        </details>
        <details>
          <summary>Erkaklar uchun</summary>
          <p>Tizza va yelkani yopgan kiyim tavsiya etiladi. Ba'zida bosh kiyim (do‘ppi) kiyish hurmat belgisi sanaladi.</p>
        </details>
      </SectionCard>

      <SectionCard icon="🕌" title="Ziyoratgohlarda Odob">
        <ul>
          <li>Masjidga kirishda oyoq kiyimni yeching.</li>
          <li>Sokin ohangda gapiring, suratga olishdan avval ruxsat so‘rang.</li>
          <li>Ibodat qilayotganlarga xalaqit bermang.</li>
          <li>Ayollar uchun: ro‘mol yopish va yopiq kiyim kiyish tavsiya etiladi.</li>
        </ul>
      </SectionCard>

      <SectionCard icon="✨" title="Madaniy Muomala va Foydali Maslahatlar">
        <ul>
          <li>"Assalomu alaykum" – asosiy salomlashish shakli.</li>
          <li>Qo‘l berib ko‘rishish erkaklar orasida odatiy, ayollarga esa faqat ular xohlasa.</li>
          <li>Uyga taklif – mehmondo‘stlik belgisi. Taklifni rad etishdan oldin muloyim izoh bering.</li>
          <li>Milliy taomlar hurmat bilan iste’mol qilinadi: osh, choy, non – muqaddas.</li>
          <li>Ba’zi joylarda suratga olish taqiqlangan – avval ruxsat so‘rang.</li>
        </ul>
      </SectionCard>
    </div>
  );
}
