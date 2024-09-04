export async function insertHotel(hotel: HotelModel): Promise<any | {status: number}> {
    try {
        const body = {
            id: hotel.id,
            name: hotel.name,
            address: hotel.address,
            startEntry: hotel.startEntry,
            endEntry: hotel.endEntry,
            booked: hotel.booked,
            price: hotel.price,
            sellerId: hotel.sellerId,
            content: hotel.content,
            shortContent: hotel.shortContent,
            roomNumber: hotel.roomNumber,
            roomType: hotel.roomType,
            roomMember: hotel.roomMember,
            nickname: hotel.nickname,
            startRow: hotel.startRow,
            size: hotel.size
        }
        const response = await fetch('http://localhost:3000/hotels', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const data: any = await response.json();
        return data;
    } catch (error) {
        console.log('There has been a problem with your fetch operation:', error);
        return {status: 500};
    }
  
}