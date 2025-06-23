import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Send, User, Mail, Phone, MapPin, Truck, Store, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface OrderForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  transport: 'courier' | 'pickup';
  notes: string;
}

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderForm, setOrderForm] = useState<OrderForm>({
    name: '',
    email: '',
    phone: '',
    address: '',
    transport: 'courier',
    notes: ''
  });

  const total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  const handleEmptyCart = () => {
    if (confirm('Kas olete kindel, et soovite ostukorvi tühjendada?')) {
      dispatch({ type: 'CLEAR_CART' });
    }
  };

  const handleFormChange = (field: keyof OrderForm, value: string) => {
    setOrderForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create order summary
    const orderSummary = {
      items: state.items,
      total,
      customer: orderForm,
      orderDate: new Date().toISOString(),
      orderId: `MH-${Date.now()}`
    };

    try {
      // Here you would typically send the order to your backend
      // For now, we'll simulate the email sending
      console.log('Order submitted:', orderSummary);
      
      // Show confirmation
      setShowConfirmation(true);
      setShowOrderForm(false);
      
      // Clear cart after successful order
      setTimeout(() => {
        dispatch({ type: 'CLEAR_CART' });
        setShowConfirmation(false);
        dispatch({ type: 'CLOSE_CART' });
        setOrderForm({
          name: '',
          email: '',
          phone: '',
          address: '',
          transport: 'courier',
          notes: ''
        });
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Viga broneeringu esitamisel. Palun proovige uuesti.');
    }
  };

  const isFormValid = orderForm.name && orderForm.email && orderForm.phone && 
    (orderForm.transport === 'pickup' || orderForm.address);

  if (!state.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => dispatch({ type: 'CLOSE_CART' })} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-vintage-200">
            <h2 className="text-lg font-semibold text-vintage-700">
              {showOrderForm ? 'Broneeringu vormistamine' : showConfirmation ? 'Broneering esitatud' : `Ostukorv (${itemCount})`}
            </h2>
            <button
              onClick={() => {
                dispatch({ type: 'CLOSE_CART' });
                setShowOrderForm(false);
                setShowConfirmation(false);
              }}
              className="p-2 hover:bg-vintage-100 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Confirmation Message */}
          {showConfirmation && (
            <div className="flex-1 p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-vintage-700 mb-4">
                  Broneering edukalt esitatud!
                </h3>
                <p className="text-vintage-600 mb-4">
                  Täname teid broneeringu eest! Võtame teiega ühendust 24 tunni jooksul, 
                  et kinnitada broneeringu üksikasjad ja kokku leppida tarneaeg.
                </p>
                <p className="text-sm text-vintage-500">
                  Broneeringu kinnitus on saadetud teie e-posti aadressile.
                </p>
              </div>
            </div>
          )}

          {/* Order Form */}
          {showOrderForm && !showConfirmation && (
            <form onSubmit={handleSubmitOrder} className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {/* Order Summary */}
                <div className="bg-vintage-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-vintage-700 mb-2">Broneeringu kokkuvõte</h3>
                  <div className="space-y-2">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.name} × {item.quantity}</span>
                        <span>€{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                    <div className="border-t border-vintage-200 pt-2 font-semibold">
                      <div className="flex justify-between">
                        <span>Kokku:</span>
                        <span>€{total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="font-semibold text-vintage-700 mb-4">Kontaktandmed</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-vintage-700 mb-1">
                        Nimi *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-vintage-400" />
                        <input
                          type="text"
                          required
                          value={orderForm.name}
                          onChange={(e) => handleFormChange('name', e.target.value)}
                          className="w-full pl-10 pr-3 py-2 border border-vintage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vintage-500 focus:border-transparent"
                          placeholder="Teie nimi"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-vintage-700 mb-1">
                        E-post *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-vintage-400" />
                        <input
                          type="email"
                          required
                          value={orderForm.email}
                          onChange={(e) => handleFormChange('email', e.target.value)}
                          className="w-full pl-10 pr-3 py-2 border border-vintage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vintage-500 focus:border-transparent"
                          placeholder="teie@email.ee"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-vintage-700 mb-1">
                        Telefon *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-vintage-400" />
                        <input
                          type="tel"
                          required
                          value={orderForm.phone}
                          onChange={(e) => handleFormChange('phone', e.target.value)}
                          className="w-full pl-10 pr-3 py-2 border border-vintage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vintage-500 focus:border-transparent"
                          placeholder="+372 5xxx xxxx"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transport Method */}
                <div>
                  <h3 className="font-semibold text-vintage-700 mb-4">Tarneviis</h3>
                  <div className="space-y-3">
                    <label className="flex items-center p-3 border border-vintage-300 rounded-lg cursor-pointer hover:bg-vintage-50 transition-colors duration-200">
                      <input
                        type="radio"
                        name="transport"
                        value="courier"
                        checked={orderForm.transport === 'courier'}
                        onChange={(e) => handleFormChange('transport', e.target.value)}
                        className="mr-3"
                      />
                      <Truck className="w-5 h-5 text-vintage-500 mr-3" />
                      <div>
                        <div className="font-medium text-vintage-700">Kuller</div>
                        <div className="text-sm text-vintage-600">Toome kauba teie koju</div>
                      </div>
                    </label>

                    <label className="flex items-center p-3 border border-vintage-300 rounded-lg cursor-pointer hover:bg-vintage-50 transition-colors duration-200">
                      <input
                        type="radio"
                        name="transport"
                        value="pickup"
                        checked={orderForm.transport === 'pickup'}
                        onChange={(e) => handleFormChange('transport', e.target.value)}
                        className="mr-3"
                      />
                      <Store className="w-5 h-5 text-vintage-500 mr-3" />
                      <div>
                        <div className="font-medium text-vintage-700">Kättesaamine poest</div>
                        <div className="text-sm text-vintage-600">Tulen ise järele</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Address (only if courier selected) */}
                {orderForm.transport === 'courier' && (
                  <div>
                    <label className="block text-sm font-medium text-vintage-700 mb-1">
                      Tarneaadress *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-vintage-400" />
                      <textarea
                        required
                        value={orderForm.address}
                        onChange={(e) => handleFormChange('address', e.target.value)}
                        rows={3}
                        className="w-full pl-10 pr-3 py-2 border border-vintage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vintage-500 focus:border-transparent resize-none"
                        placeholder="Täielik tarneaadress..."
                      />
                    </div>
                  </div>
                )}

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-medium text-vintage-700 mb-1">
                    Lisainfo (valikuline)
                  </label>
                  <textarea
                    value={orderForm.notes}
                    onChange={(e) => handleFormChange('notes', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-vintage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vintage-500 focus:border-transparent resize-none"
                    placeholder="Lisainfo broneeringu kohta..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="w-full flex items-center justify-center px-6 py-3 bg-vintage-500 text-white font-semibold rounded-lg hover:bg-vintage-600 disabled:bg-vintage-300 disabled:cursor-not-allowed transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Esita broneering
                </button>

                <p className="text-xs text-vintage-500 text-center">
                  Broneeringu esitamisel võtame teiega ühendust 24 tunni jooksul
                </p>
              </div>
            </form>
          )}

          {/* Cart Items */}
          {!showOrderForm && !showConfirmation && (
            <div className="flex-1 overflow-y-auto p-6">
              {state.items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-vintage-300 mx-auto mb-4" />
                  <p className="text-vintage-600">Teie ostukorv on tühi</p>
                  <button
                    onClick={() => dispatch({ type: 'CLOSE_CART' })}
                    className="mt-4 text-vintage-500 hover:text-vintage-700 font-medium"
                  >
                    Jätka ostlemist
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-vintage-700 truncate">
                          {item.name}
                        </h3>
                        <p className="text-lg font-semibold text-vintage-700">
                          €{item.price.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-vintage-100 rounded-full transition-colors duration-200"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-vintage-100 rounded-full transition-colors duration-200"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Footer */}
          {state.items.length > 0 && !showOrderForm && !showConfirmation && (
            <div className="border-t border-vintage-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-vintage-700">Kokku:</span>
                <span className="text-2xl font-bold text-vintage-700">
                  €{total.toLocaleString()}
                </span>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={() => setShowOrderForm(true)}
                  className="w-full flex items-center justify-center px-6 py-3 bg-vintage-500 text-white font-semibold rounded-lg hover:bg-vintage-600 transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Vormista broneering
                </button>
                
                <button
                  onClick={handleEmptyCart}
                  className="w-full flex items-center justify-center px-6 py-2 border border-vintage-300 text-vintage-600 font-medium rounded-lg hover:bg-vintage-50 transition-all duration-300"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Tühjenda ostukorv
                </button>
              </div>
              
              <p className="text-xs text-vintage-500 text-center mt-3">
                Makseviis lepitakse kokku broneeringu kinnitamisel
              </p>
            </div>
          )}

          {/* Back Button for Order Form */}
          {showOrderForm && !showConfirmation && (
            <div className="border-t border-vintage-200 p-6">
              <button
                onClick={() => setShowOrderForm(false)}
                className="w-full px-6 py-3 border border-vintage-300 text-vintage-700 font-semibold rounded-lg hover:bg-vintage-50 transition-all duration-300"
              >
                Tagasi ostukorvi
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;