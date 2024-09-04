"use client";
import { get } from "http";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Home() {
  const [hotels, setHotels] = useState<HotelModel[]>([]);
  const router = useRouter();
  useEffect(() => {
    fetch('http://223.130.131.65:8080/api/hotels/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setHotels(data);
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <table className="table-auto border border-indigo-600" >
  <thead>
    <tr className="border border-indigo-600">
      <th>id</th>
      <th>name</th>
      <th>address</th>
      <th>startEntry</th>
      <th>endEntry</th>
      <th>booked</th>
      <th>price</th>
      <th>sellerId</th>
      <th>content</th>
      <th>shortContent</th>
      <th>roomNumber</th>
      <th>roomType</th>
      <th>roomMember</th>
      <th>nickname</th>
      <th>startRow</th>
      <th>size</th>
    </tr>
  </thead>
  <tbody>
    {hotels.map((h) => (
      <tr key={h.id} className="border border-indigo-600">
      <td>{h.id}</td>
              <td>{h.name}</td>
              <td>{h.address}</td>
              <td>{h.startEntry}</td>
              <td>{h.endEntry}</td>
              <td>{h.booked ? "Yes" : "No"}</td>
              <td>{h.price}</td>
              <td>{h.sellerId}</td>
              <td>{h.content}</td>
              <td>{h.shortContent}</td>
              <td>{h.roomNumber}</td>
              <td>{h.roomType}</td>
              <td>{h.roomMember}</td>
              <td>{h.nickname}</td>
              <td>{h.startRow}</td>
              <td>{h.size}</td>
    </tr>
    ))}
  </tbody>
</table>
<button
  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
  onClick={() => router.push('/register')}>
  등록하기
</button>
    </main>
  );
}