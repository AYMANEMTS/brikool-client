const citiesInMorocco = [
    { fr: "Agadir", ar: "أكادير", en: "Agadir" },
    { fr: "Ahfir", ar: "أحفير", en: "Ahfir" },
    { fr: "Aïn El Aouda", ar: "عين العودة", en: "Aïn El Aouda" },
    { fr: "Aïn Harrouda", ar: "عين حرودة", en: "Aïn Harrouda" },
    { fr: "Al Hoceïma", ar: "الحسيمة", en: "Al Hoceïma" },
    { fr: "Amizmiz", ar: "أمزميز", en: "Amizmiz" },
    { fr: "Asilah", ar: "أصيلة", en: "Asilah" },
    { fr: "Aourir", ar: "أورير", en: "Aourir" },
    { fr: "Azemmour", ar: "أزمور", en: "Azemmour" },
    { fr: "Azrou", ar: "أزرو", en: "Azrou" },
    { fr: "Beni Ansar", ar: "بني أنصار", en: "Beni Ansar" },
    { fr: "Beni Mellal", ar: "بني ملال", en: "Beni Mellal" },
    { fr: "Ben Guerir", ar: "بن جرير", en: "Ben Guerir" },
    { fr: "Ben Slimane", ar: "بن سليمان", en: "Ben Slimane" },
    { fr: "Bejaâd", ar: "بجعد", en: "Bejaâd" },
    { fr: "Berkane", ar: "بركان", en: "Berkane" },
    { fr: "Berrechid", ar: "برشيد", en: "Berrechid" },
    { fr: "Bir Gandouz", ar: "بئر كندوز", en: "Bir Gandouz" },
    { fr: "Bir Jdid", ar: "بئر جديد", en: "Bir Jdid" },
    { fr: "Bouarfa", ar: "بوعرفة", en: "Bouarfa" },
    { fr: "Boujdour", ar: "بوجدور", en: "Boujdour" },
    { fr: "Boulemane", ar: "بولمان", en: "Boulemane" },
    { fr: "Bouznika", ar: "بوزنيقة", en: "Bouznika" },
    { fr: "Casablanca", ar: "الدار البيضاء", en: "Casablanca" },
    { fr: "Chefchaouen", ar: "شفشاون", en: "Chefchaouen" },
    { fr: "Chichaoua", ar: "شيشاوة", en: "Chichaoua" },
    { fr: "Dakhla", ar: "الداخلة", en: "Dakhla" },
    { fr: "Demnate", ar: "دمنات", en: "Demnate" },
    { fr: "Drargua", ar: "دراركة", en: "Drargua" },
    { fr: "El Hajeb", ar: "الحاجب", en: "El Hajeb" },
    { fr: "El Jadida", ar: "الجديدة", en: "El Jadida" },
    { fr: "El Kelaâ des Sraghna", ar: "قلعة السراغنة", en: "El Kelaâ des Sraghna" },
    { fr: "El Youssoufia", ar: "اليوسفية", en: "El Youssoufia" },
    { fr: "Errachidia", ar: "الرشيدية", en: "Errachidia" },
    { fr: "Essaouira", ar: "الصويرة", en: "Essaouira" },
    { fr: "Fès", ar: "فاس", en: "Fès" },
    { fr: "Fkih Ben Salah", ar: "الفقيه بن صالح", en: "Fkih Ben Salah" },
    { fr: "Fnideq", ar: "الفنيدق", en: "Fnideq" },
    { fr: "Guelmim", ar: "كلميم", en: "Guelmim" },
    { fr: "Guercif", ar: "جرسيف", en: "Guercif" },
    { fr: "Had Soualem", ar: "حد السوالم", en: "Had Soualem" },
    { fr: "Ifrane", ar: "إفران", en: "Ifrane" },
    { fr: "Imlil", ar: "إمليل", en: "Imlil" },
    { fr: "Imzouren", ar: "إمزورن", en: "Imzouren" },
    { fr: "Jorf El Melha", ar: "جرف الملحة", en: "Jorf El Melha" },
    { fr: "Kénitra", ar: "القنيطرة", en: "Kénitra" },
    { fr: "Khémisset", ar: "الخميسات", en: "Khémisset" },
    { fr: "Khémis Zmamra", ar: "خميس الزمامرة", en: "Khémis Zmamra" },
    { fr: "Khouribga", ar: "خريبكة", en: "Khouribga" },
    { fr: "Ksar El Kebir", ar: "القصر الكبير", en: "Ksar El Kebir" },
    { fr: "Laâyoune", ar: "العيون", en: "Laâyoune" },
    { fr: "Larache", ar: "العرائش", en: "Larache" },
    { fr: "Marrakech", ar: "مراكش", en: "Marrakech" },
    { fr: "Martil", ar: "مرتيل", en: "Martil" },
    { fr: "M'diq", ar: "المضيق", en: "M'diq" },
    { fr: "Meknès", ar: "مكناس", en: "Meknès" },
    { fr: "Midelt", ar: "ميدلت", en: "Midelt" },
    { fr: "Mohammédia", ar: "المحمدية", en: "Mohammédia" },
    { fr: "Moulay Bousselham", ar: "مولاي بوسلهام", en: "Moulay Bousselham" },
    { fr: "Nador", ar: "الناظور", en: "Nador" },
    { fr: "Ouarzazate", ar: "ورزازات", en: "Ouarzazate" },
    { fr: "Oued Zem", ar: "واد زم", en: "Oued Zem" },
    { fr: "Oujda", ar: "وجدة", en: "Oujda" },
    { fr: "Ouazzane", ar: "وزان", en: "Ouazzane" },
    { fr: "Rabat", ar: "الرباط", en: "Rabat" },
    { fr: "Safi", ar: "آسفي", en: "Safi" },
    { fr: "Salé", ar: "سلا", en: "Salé" },
    { fr: "Settat", ar: "سطات", en: "Settat" },
    { fr: "Sidi Bennour", ar: "سيدي بنور", en: "Sidi Bennour" },
    { fr: "Sidi Ifni", ar: "سيدي إفني", en: "Sidi Ifni" },
    { fr: "Skhirat", ar: "الصخيرات", en: "Skhirat" },
    { fr: "Tafraout", ar: "تافراوت", en: "Tafraout" },
    { fr: "Tanger", ar: "طنجة", en: "Tanger" },
    { fr: "Tantan", ar: "طانطان", en: "Tantan" },
    { fr: "Taroudant", ar: "تارودانت", en: "Taroudant" },
    { fr: "Tarfaya", ar: "طرفاية", en: "Tarfaya" },
    { fr: "Taza", ar: "تازة", en: "Taza" },
    { fr: "Tétouan", ar: "تطوان", en: "Tétouan" },
    { fr: "Tiznit", ar: "تيزنيت", en: "Tiznit" },
    { fr: "Youssoufia", ar: "اليوسفية", en: "Youssoufia" },
    { fr: "Zagora", ar: "زاكورة", en: "Zagora" }
];

export default citiesInMorocco;
