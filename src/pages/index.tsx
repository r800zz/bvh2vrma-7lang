import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import LoadBVH from '../components/LoadBVH';
import VrmViewer from '../components/VrmViewer';

interface MessageType {
  forkfrom: string;
  japaneseonly: string;
  sevenlang: string;
  original: string;
  title: string;
  description: string;
  dragAndDrop: string;
  selectFile: string;
  externalLink: string;
  vrmconverting: string;
  convertcomplete: string;
  filedownload: string;
  convertotherfile: string;
  converterror: string;
  uploadagin: string;
}

const messages: Record<string, MessageType> = {
  en: {
    forkfrom: 'forked from vrm-c/bvh2vrma',
    japaneseonly: 'Japanese only',
    sevenlang: '7 languages',
    original: 'Original project',
    title: 'bvh to VRMA',
    description: 'Convert your bvh file to a VRMA file.',
    dragAndDrop: 'Drag & drop a bvh file or click to select a file',
    selectFile: 'Select a file',
    //externalLink: 'External Link',
    externalLink: 'vr180g.com',
    vrmconverting: 'Converting to VRMA file...',
    convertcomplete: 'Conversion completed',
    filedownload: 'Download file',
    convertotherfile: 'Convert another file',
    converterror: 'An error occurred.',
    uploadagin: 'Please upload again.',
  },
  es: {
    forkfrom: 'Fork de vrm-c/bvh2vrma',
    japaneseonly: 'Solo japonés',
    sevenlang: '7 idiomas',
    original: 'Proyecto original',
    title: 'bvh a VRMA',
    description: 'Convierte tu archivo bvh a un archivo VRMA.',
    dragAndDrop: 'Arrastra y suelta un archivo bvh o haz clic para seleccionar un archivo',
    selectFile: 'Seleccionar archivo',
    //externalLink: 'Enlace externo',
    externalLink: 'vr180g.com',
    vrmconverting: 'Convirtiendo a archivo VRMA...',
    convertcomplete: 'Conversión completada',
    filedownload: 'Descargar archivo',
    convertotherfile: 'Convertir otro archivo',
    converterror: 'Se produjo un error.',
    uploadagin: 'Por favor, sube el archivo nuevamente.',
  },
  th: {
    forkfrom: 'Fork จาก vrm-c/bvh2vrma',
    japaneseonly: 'เฉพาะภาษาญี่ปุ่น',
    sevenlang: '7 ภาษา',
    original: 'โปรเจกต์ต้นฉบับ',
    title: 'bvh ไปยัง VRMA',
    description: 'แปลงไฟล์ bvh ของคุณเป็นไฟล์ VRMA.',
    dragAndDrop: 'ลากและวางไฟล์ bvh หรือคลิกเพื่อเลือกไฟล์',
    selectFile: 'เลือกไฟล์',
    //externalLink: 'ลิงก์ภายนอก',
    externalLink: 'vr180g.com',
    vrmconverting: 'กำลังแปลงเป็นไฟล์ VRMA...',
    convertcomplete: 'การแปลงเสร็จสิ้นแล้ว',
    filedownload: 'ดาวน์โหลดไฟล์',
    convertotherfile: 'แปลงไฟล์อื่น',
    converterror: 'เกิดข้อผิดพลาด',
    uploadagin: 'กรุณาอัปโหลดอีกครั้ง',
  },
  cn: {
    forkfrom: 'Fork 自 vrm-c/bvh2vrma',
    japaneseonly: '仅限日语',
    sevenlang: '7 种语言',
    original: '原始项目',
    title: 'bvh 转 VRMA',
    description: '将你的 bvh 文件转换为 VRMA 文件。',
    dragAndDrop: '拖放 bvh 文件或点击选择文件',
    selectFile: '选择文件',
    //externalLink: '外部链接',
    externalLink: 'vr180g.com',
    vrmconverting: '正在转换为 VRMA 文件...',
    convertcomplete: '转换完成',
    filedownload: '下载文件',
    convertotherfile: '转换其他文件',
    converterror: '发生错误。',
    uploadagin: '请重新上传。',
  },
  kr: {
    forkfrom: 'vrm-c/bvh2vrma에서 Fork함',
    japaneseonly: '일본어만',
    sevenlang: '7개 언어',
    original: '원본 프로젝트',
    title: 'bvh를 VRMA로',
    description: 'bvh 파일을 VRMA 파일로 변환합니다.',
    dragAndDrop: '드래그 앤 드롭하거나 클릭하여 파일을 선택하세요',
    selectFile: '파일 선택',
    //externalLink: '외부 링크',
    externalLink: 'vr180g.com',
    vrmconverting: 'VRMA 파일로 변환 중...',
    convertcomplete: '변환이 완료되었습니다',
    filedownload: '파일 다운로드',
    convertotherfile: '다른 파일 변환',
    converterror: '오류가 발생했습니다.',
    uploadagin: '다시 업로드해 주세요.',
  },
  jp: {
    forkfrom: 'vrm-c/bvh2vrmaからのフォーク',
    japaneseonly: '日本語のみ',
    sevenlang: '7言語',
    original: '元プロジェクト',
    title: 'bvh to VRMA',
    description: 'あなたのbvhファイルをVRMAファイルに変換します。',
    dragAndDrop: 'bvhファイルをドラッグ&ドロップもしくはクリックしてファイルを選択',
    selectFile: 'ファイルを選択',
    //externalLink: '外部リンク',
    externalLink: 'vr180g.com',
    vrmconverting: 'VRMAファイルに変換中...',
    convertcomplete: '変換が完了しました',
    filedownload: 'ファイルをダウンロード',
    convertotherfile: '他のファイルを変換',
    converterror: 'エラーが発生しました。',
    uploadagin: '再度アップロードしてください。',

  },
  ru: {
    forkfrom: 'Fork от vrm-c/bvh2vrma',
    japaneseonly: 'Только японский',
    sevenlang: '7 языков',
    original: 'Оригинальный проект',
    title: 'bvh в VRMA',
    description: 'Преобразуйте ваш файл bvh в файл VRMA.',
    dragAndDrop: 'Перетащите файл bvh или нажмите, чтобы выбрать файл.',
    selectFile: 'Выбрать файл',
    //externalLink: 'Внешняя ссылка',
    externalLink: 'vr180g.com',
    vrmconverting: 'Идёт преобразование в файл VRMA...',
    convertcomplete: 'Преобразование завершено',
    filedownload: 'Скачать файл',
    convertotherfile: 'ППреобразовать другой файл',
    converterror: 'Произошла ошибка.',
    uploadagin: 'Пожалуйста, загрузите файл повторно.',
  },
};

const langCodes: Record<string, string> = {
  cn: 'zh',
  kr: 'ko',
  jp: 'ja',
};

const langButtons: Record<string, string> = {
  en: 'English',
  ru: 'Русский',
  es: 'Español',
  th: 'ภาษาไทย',
  cn: '中文',
  kr: '한국어',
  jp: '日本語',
};

export default function Home() {
  const [blobURL, setBlobURL] = useState<string | null>(null);
  const router = useRouter();
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    let l = router.query.l as string;
    const validLangs = Object.keys(messages);
    if (!l || !validLangs.includes(l)) {
      l = 'en';
    }

    setLang(l);
    const htmlLang = langCodes[l as keyof typeof langCodes] || l;
    document.documentElement.lang = htmlLang;
  }, [router.isReady, router.query]);

  const currentMessages = messages[lang as keyof typeof messages];

  const handleLangChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    router.push(`/?l=${event.target.value}`);
  };

  return (
<>
  <Head>
    <title>{currentMessages.title} {currentMessages.sevenlang}</title>
    <meta name="description" content={currentMessages.description} />
  </Head>
    <main className={`h-screen flex justify-center lg:items-center font-sans`}>
      <div className="rounded-24 lg:h-[80vh] lg:w-[80vw] flex justify-center lg:items-center lg:bg-[--charcoal-background1] lg:mt-0 mt-40">
        <div className="lg:w-[60vw] lg:flex lg:flex-row-reverse lg:justify-around items-center gap-32">
          {blobURL ? (
            <>
              <div>
                <div className="pb-40">
                  <div className="pb-40 text-[32px] text-[--charcoal-brand] font-bold text-center">
    {currentMessages.title} {currentMessages.sevenlang}
                  </div>
                  <div className="flex justify-center flex-wrap gap-4 text-sm pb-4">
                    {Object.keys(langButtons).map((l) => (
                      <label key={l} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="lang"
                          value={l}
                          checked={l === lang}
                          onChange={handleLangChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-gray-200">{langButtons[l]}</span>
                      </label>
                    ))}
                  </div>
                  <div className="text-center text-[14px] sm:text-[16px] pb-[6px]">
                    {currentMessages.description}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-full lg:h-[296px] h-[268px]">
                    <LoadBVH setBlobURL={setBlobURL}
                             dragAndDropText={currentMessages.dragAndDrop}
                             selectFileText={currentMessages.selectFile}
                             vrmconvertingText={currentMessages.vrmconverting}
                             convertcompleteText={currentMessages.convertcomplete}
                             filedownloadText={currentMessages.filedownload}
                             convertotherfileText={currentMessages.convertotherfile}
                             converterrorText={currentMessages.converterror}
                             uploadaginText={currentMessages.uploadagin}
                     />
                  </div>
                </div>
                <div className="flex justify-center pt-8">
                  <a href={`https://vr180g.com/?l=${lang}`} className="text-link1 text-center">{currentMessages.externalLink}</a>
                </div>
              </div>
              <div className="max-lg:py-24 flex justify-center">
                <VrmViewer blobURL={blobURL} />
              </div>
            </>
          ) : (
            <>
              <div className="">
                <div className="pb-40">
                  <div className="pb-40 text-[32px] text-[--charcoal-brand] font-bold text-center">
    {currentMessages.title} {currentMessages.sevenlang}
                  </div>
                  <div className="flex justify-center flex-wrap gap-4 text-sm pb-4">
                    {Object.keys(langButtons).map((l) => (
                      <label key={l} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="lang"
                          value={l}
                          checked={l === lang}
                          onChange={handleLangChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-gray-200">{langButtons[l]}</span>
                      </label>
                    ))}
                  </div>
                  <div className="text-center text-[14px] sm:text-[16px] pb-[6px]">
                    {currentMessages.description}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="lg:w-[600px] lg:h-[296px] h-[268px] w-[358px] sm:w-[60vw]">
                    <LoadBVH setBlobURL={setBlobURL}
                       dragAndDropText={currentMessages.dragAndDrop}
                       selectFileText={currentMessages.selectFile}
                       vrmconvertingText={currentMessages.vrmconverting}
                       convertcompleteText={currentMessages.convertcomplete}
                       filedownloadText={currentMessages.filedownload}
                       convertotherfileText={currentMessages.convertotherfile}
                       converterrorText={currentMessages.converterror}
                       uploadaginText={currentMessages.uploadagin}
                    />
                  </div>
                </div>
                <div className="flex justify-center pt-8">
                  <a
  href="https://github.com/r800zz/bvh2vrma-7lang"
  target="_blank"
  rel="noopener noreferrer"
  className="text-link1 text-center">github r800zz/bvh2vrma-7lang ({currentMessages.forkfrom})</a>
                </div>
                <div className="flex justify-center pt-8">
                  <a href={`https://vr180g.com/?l=${lang}`} className="text-link1 text-center">
                    {currentMessages.externalLink}
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
</>
  );
}

