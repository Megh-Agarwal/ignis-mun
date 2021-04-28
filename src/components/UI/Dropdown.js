import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Dropdown = (props) => {
    const customStyle = props.customStyle ? props.customStyle : "left-25";

    console.log(props);
    const items = props.items.map(item => {
        return <Menu.Item>
            {({ active }) => (
                <Link
                    to={`/committee/${item}`}
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    {item}
                </Link>
            )}
        </Menu.Item>
    })

    return (
        <Menu as="div" className={customStyle}>
            {({ open }) => (
                <>
                <div>
                    <Menu.Button className="inline-flex justify-start w-full bg-white text-m font-medium text-gray-700">
                        {props.title}
                    </Menu.Button>
                </div>
                <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items static className={`absolute origin-bottom-right ${customStyle} mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                        <div className="py-1">
                        {items}
                        </div>
                    </Menu.Items>
                </Transition>
                </>
            )}
        </Menu>
    )
}

export default Dropdown