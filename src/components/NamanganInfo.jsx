import React, { useState } from 'react';
import './NamanganInfo.css';

const NamanganInfo = () => {
  const [isVisible, setIsVisible] = useState({
    geography: false,
    economy: false,
    culture: false,
    education: false,
    nature: false,
    hududlar: false,
    villages: false
  });

  const toggleVisibility = (section) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div className="namangan-info">
      <h2 className="title">Namangan Viloyati Haqida</h2>
      
      <div className="section">
        <button
          className={`toggle-btn ${isVisible.geography ? 'active' : ''}`}
          onClick={() => toggleVisibility('geography')}
        >
          {isVisible.geography ? 'Yopish' : 'Geografiya'}
        </button>
        {isVisible.geography && (
          <div className="section-content">
            <h3 className="section-title">Geografiya:</h3>
            <p className="text">
              Namangan viloyati O‘zbekistonning Farg‘ona vodiysida joylashgan. Viloyatning maydoni taxminan 7,5 ming kvadrat kilometrni tashkil etadi.Namangan shahri Fargʻona vodiysining shimoliy qismida, Toshkentdan 200 km janubi-sharqda (avtomobil yoʻlida taxminan 300 km) joylashgan. Balandligi – dengiz sathidan 476 metr
            </p>
          </div>
        )}
      </div>

      <div className="section">
        <button
          className={`toggle-btn ${isVisible.economy ? 'active' : ''}`}
          onClick={() => toggleVisibility('economy')}
        >
          {isVisible.economy ? 'Yopish' : 'Iqtisodiyot'}
        </button>
        {isVisible.economy && (
          <div className="section-content">
            <h3 className="section-title">Iqtisodiyot:</h3>
            <p className="text">
            Namangan viloyatining iqtisodiyoti asosan qishloq xo‘jaligi, sanoat va xizmatlar sohalariga asoslangan. Paxta, g‘alla, meva-sabzavotlar yetishtirish keng rivojlangan. Sanoatda paxta tozalash, kiyim-kechak, mashinasozlik va kimyo sanoati mavjud. Xizmatlar sohasida turizm, savdo va transport tarmoqlari rivojlanmoqda. Viloyat energiya ishlab chiqarish va qurilishda ham o‘smoqda.            </p>
          </div>
        )}
      </div>

      <div className="section">
        <button
          className={`toggle-btn ${isVisible.culture ? 'active' : ''}`}
          onClick={() => toggleVisibility('culture')}
        >
          {isVisible.culture ? 'Yopish' : 'Tarix'}
        </button>
        {isVisible.culture && (
          <div className="section-content">
            <h3 className="section-title">Tarix:</h3>
            <p className="text">
            Namangan viloyati — Oʻzbekiston Respublikasi tarkibidagi viloyat. 1941-yil 11-martda tashkil etilgan 1960-yil 25-yanvarda Andijon va Fargʻona viloyatlari tarkibiga qoʻshib yuborilgan. Fargʻona vodiysining qadimiy poytaxti Axsikat (Axsikent) 1620-yildagi qattiq zilzila natijasida vayron boʻlganligi sababli uning aholisi hozirgi Namangan shahri hududiga koʻchib oʻtgan. Namangan shahri tuz koni („Namak kon“) yaqinida vujudga kelgan boʻlib, shahar nomi ilk bor oʻrta asrlarga oid tarixiy xujjatlarda tilga olinadi. Zahiriddin Muhammad Bobur oʻzining „Boburnoma“ (XVI asr) asarida Namangan qishlogʻi haqida gapirib oʻtgan.            
            </p>
          </div>
        )}
      </div>

      <div className="section">
        <button
          className={`toggle-btn ${isVisible.education ? 'active' : ''}`}
          onClick={() => toggleVisibility('education')}
        >
          {isVisible.education ? 'Yopish' : 'Ta\'lim'}
        </button>
        {isVisible.education && (
          <div className="section-content">
            <h3 className="section-title">Ta'lim:</h3>
            <p className="text">
            Namangan viloyatida 10 ta oliy ta’lim muassasasi faoliyat ko‘rsatmoqda. Bunda, 6 ta davlat, 4 ta nodavlat oliygoh faoliyat olib bormoqda. Namangan viloyatida 800ga yaqin maktablar bor.</p>
          </div>
        )}
      </div>

      <div className="section">
        <button
          className={`toggle-btn ${isVisible.nature ? 'active' : ''}`}
          onClick={() => toggleVisibility('nature')}
        >
          {isVisible.nature ? 'Yopish' : 'Tabiat'}
        </button>
        {isVisible.nature && (
          <div className="section-content">
            <h3 className="section-title">Tabiat:</h3>
            <p className="text">
Namangan viloyati Farg‘ona vodiysida, Sirdaryoning o‘ng sohilida joylashgan. Yerlari asosan tekislik, shimolida tog‘ va tepaliklar bor. Zilzila xavfi 8 ballgacha yetadi.

Foydali qazilmalar: oltin, mis, neft, gips, qurilish materiallari va shifobaxsh suvlar. Issiq yer osti suvlari Chust-Pop va Chodaksoyda uchraydi.

Iqlimi keskin kontinental: yoz issiq (+45°), qish sovuq (−25°). Yillik o‘rtacha temperatura +13°, yog‘in asosan bahor va kuzda yog‘adi.

Sirdaryo va uning irmoqlari asosiy daryolar bo‘lib, Kosonsoy, Chortoq kabi suv omborlari mavjud. Katta kanallar qurilgan.

Tuproqlari bo‘z, qo‘ng‘ir, sho‘rxok. Tog‘larda archazorlar, yovvoyi mevali daraxtlar, tekisliklarda sho‘ra va shuvoq o‘sadi. Hayvonot dunyosi xilma-xil, ammo ba'zi turlar kamayib bormoqda.


</p>
          </div>
        )}
      </div>
       <div className="section">
        <button
          className={`toggle-btn ${isVisible.hududlar ? 'active' : ''}`}
          onClick={() => toggleVisibility('hududlar')}
        >
          {isVisible.hududlar? 'Yopish' : 'Hududlar'}
        </button>
        {isVisible.hududlar && (
          <div className="section-content">
            <h3 className="section-title">Hududlar:</h3>
            <p className="text">
Namangan viloyatida jami 19 ta tuman bor. Ularning 11 tasi qishloq tumanlari (Kosonsoy, Mingbuloq, Namangan, Norin, Pop, Toʻraqoʻrgʻon, Uychi, Uchqoʻrgʻon, Chortoq, Chust, Yangiqoʻrgʻon), 8 tasi shahar tumani (Namangan, Kosonsoy, Pop, Toʻraqoʻrgʻon, Uchqoʻrgʻon, Chortoq, Chust, Haqqulobod) va 11 ta shahar (Sang, Jomashoʻy, Toshbuloq, Navbahor, Oltinkon, Uygʻursoy).             </p>
          </div>
        )}
      </div>

      <div className="section">
        <button
          className={`toggle-btn ${isVisible.villages ? 'active' : ''}`}
          onClick={() => toggleVisibility('villages')}
        >
          {isVisible.villages? 'Yopish' : 'Qishloqlar:'}
        </button>
        {isVisible.villages && (
          <div className="section-content">
            <h3 className="section-title">Yirik Qishloqlar</h3>
            <p className="text">
              Namangan Viloyatining yirik qishloqlari: Chodak, Olmos, Varzik, Sang, Karkidon, Shahand, Jiydakapa, Chortoq, Nanay.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NamanganInfo;
