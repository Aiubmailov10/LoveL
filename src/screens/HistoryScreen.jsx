export default function HistoryScreen({ lang, t, onBack }) {
  const history = JSON.parse(localStorage.getItem("loveloop_history") || "[]");
  return (
    <div className="min-h-screen bg-pink-50 px-6 py-10 flex flex-col items-center">
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-4">{t[lang].history}</h2>
        {history.length === 0 ? (
          <p className="text-center text-gray-400">{t[lang].emptyHistory}</p>
        ) : (
          history.map((item, i) => (
            <div key={i} className="bg-pink-100 p-4 rounded-xl mb-4">
              <div className="text-lg">{item.idea.emoji} {item.idea.title}</div>
              <div className="text-sm text-gray-600">{item.date} {item.time}</div>
              <div className="text-sm mt-1">❤️ {item.rating} / 5</div>
              {item.good && <div className="text-xs mt-1 text-green-700">+ {item.good}</div>}
              {item.bad && <div className="text-xs text-yellow-700">– {item.bad}</div>}
              {item.wish && <div className="text-xs italic text-pink-700">💬 {item.wish}</div>}
            </div>
          ))
        )}
        <button onClick={onBack} className="mt-4 text-pink-500 text-sm hover:underline">← {t[lang].back}</button>
      </div>
    </div>
  );
}