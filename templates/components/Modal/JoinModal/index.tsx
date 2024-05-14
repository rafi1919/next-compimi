import { useState, useEffect } from "react";
import ModalLayout from "@/templates/components/Modal/ModalLayout"
import SearchBar from "../../SearchBar";

interface ModalProps {
    open: Boolean;
    onClose: () => void;
    onApply: (selectedRegencyId: string) => void;

}

const JoinModal: React.FC<ModalProps> = ({ open, onClose, onApply }) => {
    const [provinsiData, setProvinsiData] = useState([]);
    const [kotaData, setKotaData] = useState([]);
    const [selectedProvinceId, setSelectedProvinceId] = useState('');
    const [selectedRegencyId, setSelectedRegencyId] = useState<string>('');


    useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const response = await fetch("https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json");
                const responseData = await response.json();
                setProvinsiData(responseData);
            } catch (error) {
                console.error('Error fetching province data', error);
            }
        };

        fetchProvinces();
    }, []);

    useEffect(() => {
        const fetchRegencies = async () => {
            try {
                if (selectedProvinceId) {
                    const response = await fetch(`https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${selectedProvinceId}.json`);
                    const responseData = await response.json();
                    setKotaData(responseData);
                }
            } catch (error) {
                console.error('Error fetching regency data', error);
            }
        };

        fetchRegencies();
    }, [selectedProvinceId]);

    const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const provinceId = event.target.value;
        setSelectedProvinceId(provinceId);
    };

    const handleRegencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const regencyId = event.target.value;
        setSelectedRegencyId(regencyId);
    };

    const handleFilterApply = () => {
        onApply(selectedRegencyId);
        onClose();
    };

    return (
        <ModalLayout open={open} onClose={onClose}>
            <form className="flex flex-col gap-4">
               <SearchBar />
               <SearchBar />

                <button type="button" className="w-full p-3 rounded-xl bg-green-600 text-white" onClick={handleFilterApply}>JOIN</button>
            </form>
        </ModalLayout>
    );
}

export default JoinModal;
