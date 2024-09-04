"use client";
import { insertHotel } from "@/app/service/hotel/hotel.api";
import { get } from "http";
import Image from "next/image";
import {useState, useEffect, ChangeEvent, FormEvent} from "react";

export default function HotelRegister() {
  const [formData, setFormData] = useState<HotelModel>({
    id: 0,
    name: '',
    address: '',
    startEntry: '',
    endEntry: '',
    booked: false,
    price: 0,
    sellerId: 0,
    content: '',
    shortContent: '',
    roomNumber: 0,
    roomType: 0,
    roomMember: 0,
    nickname: '',
    startRow: 0,
    size: 0
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement; // 명시적으로 타입 지정
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // 폼 데이터를 서버로 전송하는 등의 로직을 추가하세요.
    insertHotel(formData);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>호텔 등록 화면</h1>
      <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <label>ID:</label>
        <input
          type="number"
          name="id"
          value={formData.id}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label>Start Entry:</label>
        <input
          type="date"
          name="startEntry"
          value={formData.startEntry}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label>End Entry:</label>
        <input
          type="date"
          name="endEntry"
          value={formData.endEntry}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label>Booked:</label>
        <input
          type="checkbox"
          name="booked"
          checked={formData.booked}
          onChange={handleChange}
          className="border rounded p-2"
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label>Seller ID:</label>
        <input
          type="number"
          name="sellerId"
          value={formData.sellerId}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label>Short Content:</label>
        <textarea
          name="shortContent"
          value={formData.shortContent}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label>Room Number:</label>
        <input
          type="number"
          name="roomNumber"
          value={formData.roomNumber}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label>Room Type:</label>
        <input
          type="number"
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label>Room Member:</label>
        <input
          type="number"
          name="roomMember"
          value={formData.roomMember}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label>Nickname:</label>
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label>Start Row:</label>
        <input
          type="number"
          name="startRow"
          value={formData.startRow}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label>Size:</label>
        <input
          type="number"
          name="size"
          value={formData.size}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>
    </main>
  );
}