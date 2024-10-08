import { useState, useEffect } from "react";
import ModalLayout from "@/templates/components/Modal/ModalLayout";
import { Button } from "../../Buttons";

interface ModalProps {
  open: Boolean;
  onClose: () => void;
  onApply: (selectedRegencyId: string) => void;
}

const FilterModal: React.FC<ModalProps> = ({ open, onClose, onApply }) => {
  const [provinsiData, setProvinsiData] = useState([]);
  const [kotaData, setKotaData] = useState([]);
  const [selectedProvinceId, setSelectedProvinceId] = useState("");
  const [selectedRegencyId, setSelectedRegencyId] = useState<string>("");

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch(
          "https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json"
        );
        const responseData = await response.json();
        setProvinsiData(responseData);
      } catch (error) {
        console.error("Error fetching province data", error);
      }
    };

    fetchProvinces();
  }, []);

  useEffect(() => {
    const fetchRegencies = async () => {
      try {
        if (selectedProvinceId) {
          const response = await fetch(
            `https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${selectedProvinceId}.json`
          );
          const responseData = await response.json();
          setKotaData(responseData);
        }
      } catch (error) {
        console.error("Error fetching regency data", error);
      }
    };

    fetchRegencies();
  }, [selectedProvinceId]);

  const handleProvinceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const provinceId = event.target.value;
    setSelectedProvinceId(provinceId);
  };

  const handleRegencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const regencyId = event.target.value;
    setSelectedRegencyId(regencyId);
    console.log(regencyId);
  };

  const handleFilterApply = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form from refreshing the page
    onApply(selectedRegencyId);
  };

  return (
    <ModalLayout open={open} onClose={onClose}>
      <form className="flex flex-col gap-4" onSubmit={handleFilterApply}>
        <select
          onChange={handleProvinceChange}
          value={selectedProvinceId}
          className="border-2 border-gray-300 h-10 text-dark rounded-lg text-sm focus:outline-none w-full"
        >
          <option value="">Select Province</option>
          {provinsiData.map((province: any) => (
            <option key={province.id} value={province.id}>
              {province.name}
            </option>
          ))}
        </select>

        <select
          onChange={handleRegencyChange}
          value={selectedRegencyId}
          className="border-2 border-gray-300 h-10 text-dark rounded-lg text-sm focus:outline-none w-full"
        >
          <option value="">Select Regency</option>
          {kotaData.map((regency: any) => (
            <option key={regency.id} value={regency.name}>
              {regency.name}
            </option>
          ))}
        </select>

        <Button text="filter" type="submit" />
      </form>
    </ModalLayout>
  );
};

export default FilterModal;
