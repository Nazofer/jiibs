import NavigateButton from '@/components/ui/buttons/navigateButton';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import BuildingImage from '@/assets/Building.png';
import BuildingImage2 from '@/assets/Building2.png';
import { RiAddLine } from 'react-icons/ri';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';

interface Amenity {
  name: string;
}

const amenities: Amenity[] = [
  {
    name: 'Gym',
  },
  {
    name: 'Co-working space',
  },
  {
    name: 'Rooftop terrace',
  },
  {
    name: '24/7 Doorman',
  },
  {
    name: 'Concierge',
  },
  {
    name: 'Rooftop lounge',
  },
  {
    name: 'Golf simulator',
  },
  {
    name: 'Pool',
  },
];

const Building: React.FC = () => {
  const form = useForm();

  const [switchedView, setSwitchedView] = useState(false);

  const handleSwitchView = () => {
    setSwitchedView(!switchedView);
  };

  return (
    <div>
      <div className='flex justify-end gap-5 mb-6 mr-2'>
        <Button>Publish</Button>
        <Button onClick={handleSwitchView}>View</Button>
        <NavigateButton />
      </div>
      <div className='flex gap-6'>
        <Form {...form}>
          <div className='w-full'>
            <Card className='mb-5'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem className='mb-4'>
                    <FormLabel>Building Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Empire State Building' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='address'
                render={({ field }) => (
                  <FormItem className='mb-4'>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='506 Drew Circle, New York, New York 10006'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className='flex justify-between mb-4'>
                <FormField
                  control={form.control}
                  name='stories'
                  render={({ field }) => (
                    <FormItem className='flex items-center gap-3'>
                      <FormLabel>Building Stories</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='66'
                          type='number'
                          {...field}
                          className='max-w-[6.25rem]'
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='year'
                  render={({ field }) => (
                    <FormItem className='flex items-center gap-3'>
                      <FormLabel>Year Built</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='2024'
                          type='number'
                          {...field}
                          className='max-w-[6.25rem]'
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='total'
                  render={({ field }) => (
                    <FormItem className='flex items-center gap-3'>
                      <FormLabel>Total Units</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='150'
                          type='number'
                          {...field}
                          className='max-w-[6.25rem]'
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem className='mb-4'>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Description'
                        {...field}
                        className='h-40'
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </Card>
            <Card className='mb-5'>
              <h3 className='paragraph-2 mb-3'>Media</h3>
              <div className='flex gap-5 flex-wrap'>
                <Card className='w-44 h-44 p-[10px]'>
                  <img src={BuildingImage} alt='Building' />
                </Card>
                <Card className='w-44 h-44 p-[10px]'>
                  <img src={BuildingImage} alt='Building' />
                </Card>
                <Card className='w-44 h-44 p-[10px] border-dashed'>
                  <div className='flex flex-col gap-3 items-center justify-center h-full'>
                    <p className='paragraph-2 text-muted-foreground cursor-pointer'>
                      Add
                    </p>
                    <p className='paragraph-2 text-muted-foreground cursor-pointer'>
                      Add from URL
                    </p>
                  </div>
                </Card>
              </div>
            </Card>
            {!switchedView && (
              <div>
                <Card className='rounded-b-none'>
                  <h3 className='paragraph-2'>Amenities</h3>
                </Card>
                <Card className='rounded-t-none border-t-0'>
                  <div className='flex gap-4 mb-3'>
                    <Card className='w-[9.75rem] h-[9.75rem] p-[10px] border-dashed rounded-none shrink-0'>
                      <div className='flex flex-col gap-3 items-center justify-center h-full'>
                        <p className='paragraph-2 text-muted-foreground cursor-pointer'>
                          Add
                        </p>
                        <p className='paragraph-2 text-muted-foreground cursor-pointer'>
                          Add from URL
                        </p>
                      </div>
                    </Card>
                    <div className='w-full'>
                      <FormField
                        control={form.control}
                        name='title'
                        render={({ field }) => (
                          <FormItem className='mb-3'>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input placeholder='Fitness Center' {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name='subtitle'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subtitle</FormLabel>
                            <FormControl>
                              <Input
                                placeholder='Fitness center for all residents. Open 24/7.'
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className='flex flex-col items-start gap-4'>
                    <Button>Choose Media</Button>
                    <Button variant='ghost'>
                      <span className='mr-3'>
                        <RiAddLine className='size-5' />
                      </span>
                      ADD ITEM
                    </Button>
                  </div>
                </Card>
              </div>
            )}
          </div>
          <div className='flex flex-col gap-5 max-w-[25rem] w-full'>
            <Card>
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select status' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value='active'>Active</SelectItem>
                        <SelectItem value='inactive'>Inactive</SelectItem>
                        <SelectItem value='pending'>Pending</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            </Card>
            {!switchedView ? (
              <div>
                <Card className='rounded-b-none flex justify-between'>
                  <h3 className='paragraph-2'>Amenities</h3>
                  <a href='#' className='paragraph-2 underline'>
                    view all
                  </a>
                </Card>
                <Card className='rounded-t-none border-t-0'>
                  <div className='flex flex-col gap-4'>
                    {amenities.map((amenity, index) => (
                      <div key={index} className='flex items-center gap-1.5'>
                        <Checkbox id={`item-${index}`} />
                        <label
                          htmlFor={`item-${index}`}
                          className='paragraph-2 text-muted-foreground cursor-pointer'
                        >
                          {amenity.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ) : (
              <>
                <Card>
                  <FormField
                    control={form.control}
                    name='deals'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Deals</FormLabel>
                        <FormControl>
                          <Input placeholder='N/A' {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </Card>

                <div>
                  <Card className='rounded-b-none'>
                    <h3 className='paragraph-2'>Occupancy</h3>
                  </Card>
                  <Card className='rounded-t-none border-t-0'>
                    <Calendar className='rounded-md border w-min mb-4' />
                    <div className='flex items-center gap-1.5'>
                      <Checkbox id='immediate' />
                      <label
                        htmlFor='immediate'
                        className='paragraph-2 text-muted-foreground cursor-pointer'
                      >
                        Immediate
                      </label>
                    </div>
                  </Card>
                </div>
              </>
            )}
            <div>
              <Card className='rounded-b-none'>
                <h3 className='paragraph-2'>Thumbnail</h3>
              </Card>
              <Card className='rounded-t-none border-t-0'>
                <img src={BuildingImage2} alt='Building image' />
                <p className='paragraph-2 text-muted-foreground mt-3'>
                  Click the image to edit or update
                </p>
              </Card>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Building;
