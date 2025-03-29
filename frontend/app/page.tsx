

export default function Home() {
  return (
    <div className="main-container flex flex-col items-center justify-center p-8 m-8 bg-gradient-to-tr from-red-600 to-gray-900 text-white gap-10 h-screen w-full tracking-widest text-center">
      <h2 className="text-4xl">Malware Check</h2>
      <input type="file" name="" id="" className="border-2 border-white p-4 m-4 hover:cursor-pointer text-xl" placeholder="Select File" />
      <button type="submit" className="bg-green-500 px-6 py-4 rounded-lg hover:cursor-pointer text-xl">Submit</button>
    </div>
  );
}
