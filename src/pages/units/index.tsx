import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import BuildingPlan from '@/assets/BuildingPlan.png';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { RiSearchLine } from 'react-icons/ri';
import { BiMenuAltLeft } from 'react-icons/bi';

type UnitStatus = 'On-Market' | 'Leased' | 'Draft' | 'All';
const unitStatuses: UnitStatus[] = ['All', 'On-Market', 'Leased', 'Draft'];

interface Unit {
  name: string;
  status: Omit<UnitStatus, 'All'>;
  occupancy: string;
  beds: number;
  baths: number;
  price: number;
  image: string;
}

const mockUnits: Unit[] = [
  {
    name: '121 Founders #1302',
    status: 'On-Market',
    occupancy: 'Immediate',
    beds: 1,
    baths: 1,
    price: 3500,
    image: BuildingPlan,
  },
  {
    name: '121 Founders #1509',
    status: 'On-Market',
    occupancy: 'Immediate',
    beds: 1,
    baths: 1,
    price: 3500,
    image: BuildingPlan,
  },
  {
    name: '121 Founders #804',
    status: 'Leased',
    occupancy: '07/20/2025',
    beds: 2,
    baths: 2,
    price: 5500,
    image: BuildingPlan,
  },
  {
    name: '121 Founders #203',
    status: 'Leased',
    occupancy: '08/21/2024',
    beds: 1,
    baths: 1.5,
    price: 4200,
    image: BuildingPlan,
  },
];

const Units: React.FC = () => {
  const [statusBtn, setStatusBtn] = useState<UnitStatus | 'All'>('All');
  const [units, setUnits] = useState(
    mockUnits.map((unit) => ({ ...unit, selected: false }))
  );

  const handleStatusBtn = (status: UnitStatus | 'All') => {
    setStatusBtn(status);
  };

  const isAllSelected = units.every((unit) => unit.selected);

  const toggleSelectAll = () => {
    setUnits((prevUnits) => {
      return prevUnits.map((unit) => ({ ...unit, selected: !isAllSelected }));
    });
  };

  const handleSelect = (i: number) => {
    setUnits((prevUnits) => {
      return prevUnits.map((unit, index) =>
        index === i ? { ...unit, selected: !unit.selected } : unit
      );
    });
  };

  const filteredUnits =
    statusBtn === 'All'
      ? units
      : units.filter((unit) => unit.status === statusBtn);

  return (
    <div>
      <div className='flex justify-between mb-5'>
        <h2 className='heading-3'>Units</h2>
        <Button variant='secondary'>Add Units</Button>
      </div>
      <Card className='rounded-b-none border-b-0 p-4 flex justify-between'>
        <div className='flex gap-4'>
          {unitStatuses.map((status) => (
            <Button
              key={status}
              variant={statusBtn === status ? 'dark' : 'ghost'}
              size='sm'
              onClick={() => handleStatusBtn(status)}
            >
              {status}
            </Button>
          ))}
        </div>
        <div className='flex gap-4'>
          <Button variant='outline' size='icon'>
            <RiSearchLine className='size-5' />
          </Button>
          <Button variant='outline' size='icon'>
            <BiMenuAltLeft className='size-5' />
          </Button>
        </div>
      </Card>
      <Table>
        <TableCaption>
          {filteredUnits.length ? 'A list of your units.' : 'No units found'}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox
                checked={isAllSelected}
                onCheckedChange={toggleSelectAll}
              ></Checkbox>
            </TableHead>
            <TableHead className='pl-20'>Units</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Occupancy</TableHead>
            <TableHead>Beds</TableHead>
            <TableHead>Baths</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUnits.map((unit) => (
            <TableRow key={unit.name}>
              <TableCell>
                <Checkbox
                  checked={unit.selected}
                  onCheckedChange={() => handleSelect(units.indexOf(unit))}
                ></Checkbox>
              </TableCell>
              <TableCell>
                <div className='flex items-center gap-8'>
                  <img
                    src={unit.image}
                    alt={unit.name}
                    className='w-12 h-12 rounded-md shrink-0'
                  />
                  <span className='font-medium'>{unit.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <span className='text-sm'>{unit.status}</span>
              </TableCell>
              <TableCell>
                <span className='text-sm'>{unit.occupancy}</span>
              </TableCell>
              <TableCell>
                <span className='text-sm'>{unit.beds} Beds</span>
              </TableCell>
              <TableCell>
                <span className='text-sm'>{unit.baths} Baths</span>
              </TableCell>
              <TableCell>
                <span className='text-sm'>{`$ ${unit.price}`}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Units;
