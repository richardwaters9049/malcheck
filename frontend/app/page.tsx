

export default function Home() {
  return (
    <div className="main-container flex flex-col items-center justify-center p-8 m-8 bg-blue-600 text-white gap-6 h-screen w-full">
      <h2 className="text-6xl">Malware Check</h2>
      <input type="file" name="" id="" className="border-2 border-white p-4 hover:cursor-pointer text-2xl" placeholder="Select File" />
      <button type="submit" className="bg-yellow-500 px-6 py-4 rounded-lg hover:cursor-pointer text-2xl">Submit</button>
    </div>
  );
}
