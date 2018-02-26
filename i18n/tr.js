export default {
  lang: 'tr',
  label: {
    clear: 'Temizle',
    ok: 'Tamam',
    cancel: 'İptal',
    close: 'Kapat',
    set: 'Uygula',
    select: 'Seç',
    reset: 'Sıfırla',
    remove: 'Sil',
    update: 'Güncelle',
    create: 'Oluştur',
    search: 'Ara',
    filter: 'Filtrele',
    refresh: 'Yenile'
  },
  date: {
    days: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
    daysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
    months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
    monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
    firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: true
  },
  pullToRefresh: {
    pull: 'Yenilemek için aşağıya çekin',
    release: 'Yenilemek için bırakın',
    refresh: 'Yenileniyor...'
  },
  table: {
    noData: 'Kayıt Yok',
    noResults: 'Eşleşen kayıt bulunamadı',
    loading: 'Yükleniyor...',
    selectedRows: function (rows) {
      return rows === 1
        ? '1 kayıt seçildi.'
        : (rows === 0 ? 'Seçilen yok' : rows + ' kayıt seçildi' )
    },
    rowsPerPage: 'Sayfa başına satır sayısı:',
    allRows: 'Hepsi',
    pagination: function (start, end, total) {
      return start + '-' + end + ' / ' + total
    },
    columns: 'Sütunlar'
  },
  editor: {
    url: 'URL',
    bold: 'Kalın',
    italic: 'İtalik',
    strikethrough: 'Üstü Çizili',
    underline: 'Altı Çizili',
    unorderedList: 'Sırasız Liste',
    orderedList: 'Sıralı Liste',
    subscript: 'Alt Simge',
    superscript: 'Üst Simge',
    hyperlink: 'Hyperlink',
    toggleFullscreen: 'Tam Ekran',
    quote: 'Alıntı',
    left: 'Sola Hizala',
    center: 'Ortala',
    right: 'Sağa Hizala',
    justify: 'İki Yana Yasla',
    print: 'Yazdır',
    outdent: 'Girintiyi Azalt',
    indent: 'Girintiyi Arttır',
    removeFormat: 'Biçimlendirmeyi Kaldır',
    formatting: 'Biçimlendirme',
    fontSize: 'Yazı Boyutu',
    align: 'Hizala',
    hr: 'Yatay Çizgi Ekle',
    undo: 'Geri Al',
    redo: 'Yinele',
    header1: 'Başlık 1',
    header2: 'Başlık 2',
    header3: 'Başlık 3',
    header4: 'Başlık 4',
    header5: 'Başlık 5',
    header6: 'Başlık 6',
    paragraph: 'Paragraf',
    code: 'Kod',
    size1: 'Çok Küçük',
    size2: 'Biraz Küçük',
    size3: 'Normal',
    size4: 'Orta',
    size5: 'Büyük',
    size6: 'Çok Büyük',
    size7: 'En Büyük',
    defaultFont: 'Varsayılan Yazı Tipi'
  },
  tree: {
    noNodes: 'Kayıt yok',
    noResults: 'Eşleşen kayıt yok'
  }
}
